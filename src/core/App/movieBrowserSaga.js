import { takeEvery, call, put, all } from "@redux-saga/core/effects";

import { getGenres } from "./movieBrowserAPI";
import { fetchMoviesBrowserError, fetchMoviesBrowserLoading, fetchMoviesBrowserSuccess } from "./movieBrowserSlice";

function* fetchMoviesBrowserDataHandler() {
    try {
        const [moviesBrowserGenres] = yield all([
            call(getGenres)
        ]);
        yield put(fetchMoviesBrowserSuccess({ moviesBrowserGenres }));
    } catch (error) {
        yield put(fetchMoviesBrowserError());
    }
}

export function* moviesBrowserSaga() {
    yield takeEvery(fetchMoviesBrowserLoading.type, fetchMoviesBrowserDataHandler);
}