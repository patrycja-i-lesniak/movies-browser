import { takeLatest, call, put, delay } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData, getSearchMoviesData } from "./popularMoviesAPI";
import { fetchMoviesError, fetchMoviesSuccess, fetchMoviesLoading } from "./moviesSlice";

function* fetchPopularMoviesDataHandler({ payload: location }) {
    try {
        const moviesGenres = yield call(getGenres);
        let moviesData;

        if (location.searchQuery) {
            yield delay(2000);
            moviesData = yield call(getSearchMoviesData, location);
        } else {
            moviesData = yield call(getPopularMoviesData, location.page);
        }

        yield put(fetchMoviesSuccess({ moviesData, moviesGenres }));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchMoviesLoading.type, fetchPopularMoviesDataHandler);
};