import { takeEvery, debounce, call, put } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData, getSearchMoviesData } from "./popularMoviesAPI";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess, fetchSearchMoviesLoading } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: page }) {
    try {
        const popularMoviesGenres = yield call(getGenres);
            const moviesData = yield call(getPopularMoviesData, page);
        yield put(fetchPopularMoviesSuccess({ moviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
};

function* fetchSearchMoviesDataHandler({ payload: location }) {
    try {
        const popularMoviesGenres = yield call(getGenres);
        const moviesData = yield call(getSearchMoviesData, location);
        yield put(fetchPopularMoviesSuccess({ moviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeEvery(fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
    yield debounce(1_000, fetchSearchMoviesLoading.type, fetchSearchMoviesDataHandler);
};