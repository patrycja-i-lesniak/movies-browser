import { takeEvery, delay, call, put } from "@redux-saga/core/effects";
import { getPopularMoviesData } from "./popularMoviesAPI";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: page }) {
    try {
        yield delay(2_000);
        const popularMoviesData = yield call(getPopularMoviesData, page);
        yield put(fetchPopularMoviesSuccess(popularMoviesData));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeEvery(fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
}