import { takeEvery, call, put, all } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData } from "./popularMoviesAPI";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: page }) {
    try {
        const [popularMoviesData, popularMoviesGenres] = yield all([
            call(getPopularMoviesData, page),
            call(getGenres)
        ]);
        yield put(fetchPopularMoviesSuccess({ popularMoviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* popularMoviesSaga() {
    yield takeEvery(fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
}