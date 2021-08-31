import { takeEvery, call, put, all, delay } from "@redux-saga/core/effects";

import { getConfiguration, getGenres } from "./movieBrowserAPI";
import { fetchMoviesBrowserError, fetchMoviesBrowserLoading, fetchMoviesBrowserSuccess } from "./movieBrowserSlice";

function* fetchMoviesBrowserDataHandler() {
    try {
        yield delay(1_500);
        const [moviesBrowserGenres, configuration] = yield all([
            call(getGenres),
            call(getConfiguration)
        ]);
        yield put(fetchMoviesBrowserSuccess({ moviesBrowserGenres, configuration }));
    } catch (error) {
        yield put(fetchMoviesBrowserError());
    }
}

export function* moviesBrowserSaga() {
    yield takeEvery(fetchMoviesBrowserLoading.type, fetchMoviesBrowserDataHandler);
}