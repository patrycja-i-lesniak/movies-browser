import { takeEvery, call, put, all } from "@redux-saga/core/effects";

import { getPopularMoviesData } from "./popularMoviesAPI";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: page }) {
    try {
        const [popularMoviesData] = yield all([call(getPopularMoviesData, page)]);
        yield put(fetchPopularMoviesSuccess({ popularMoviesData }));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* popularMoviesSaga() {
    yield takeEvery(fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
}