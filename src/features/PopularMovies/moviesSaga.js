import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import { getGenres, getPopularMoviesData, getSearchMoviesData } from "./popularMoviesAPI";
import { fetchMoviesError, fetchMoviesSuccess, fetchMoviesLoading } from "./moviesSlice";

function* fetchPopularMoviesDataHandler({ payload: location }) {
    try {
        const [moviesData, moviesGenres] = yield all([
            location.searchQuery ? call(getSearchMoviesData, location) : call(getPopularMoviesData, location.page),
            call(getGenres),
        ]);
        
        yield put(fetchMoviesSuccess({ moviesData, moviesGenres }));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchMoviesLoading.type, fetchPopularMoviesDataHandler);
};