import { throttle, call, put } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData, getSearchMoviesData } from "./popularMoviesAPI";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesDataHandler({ payload: location }) {
    try {
        let moviesData;
        const popularMoviesGenres = yield call(getGenres);
        if (location.searchQuery) {
            moviesData = yield call(getSearchMoviesData, location);
        } else {
            moviesData = yield call(getPopularMoviesData, location.page);
        }
        yield put(fetchPopularMoviesSuccess({ moviesData, popularMoviesGenres }));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
}

export function* popularMoviesSaga() {
    yield throttle(2000, fetchPopularMoviesLoading.type, fetchPopularMoviesDataHandler);
}