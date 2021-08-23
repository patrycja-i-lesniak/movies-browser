import { takeEvery, debounce, call, put, all } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData, getSearchMoviesData } from "./popularMoviesAPI";
import {  fetchMoviesError, fetchMoviesSuccess, fetchPopularMoviesLoading, fetchSearchMoviesLoading } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: page }) {
    try {
        const [moviesData, popularMoviesGenres] = yield all([
            call(getPopularMoviesData, page),
            call(getGenres),
        ]);
        yield put(fetchMoviesSuccess({ moviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

function* fetchSearchMoviesDataHandler({ payload: location }) {
    try {
        const [moviesData, popularMoviesGenres] = yield all([
            call(getSearchMoviesData, location),
            call(getGenres),
        ]);
        yield put(fetchMoviesSuccess({ moviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeEvery(fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
    yield debounce(1_000, fetchSearchMoviesLoading.type, fetchSearchMoviesDataHandler);
};