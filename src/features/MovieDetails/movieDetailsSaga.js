import { takeEvery, call, put, all } from "@redux-saga/core/effects";

import { getMovieCredits } from "./getMovieCredits";
import { getMovieData } from "./getMovieData";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler({ payload: movieID }) {
    try {
        const [movieData, movieCredits] = yield all([
            call(getMovieData, movieID),
            call(getMovieCredits, movieID)
        ]);
        yield put(fetchMovieDetailsSuccess({ movieData, movieCredits }));
    } catch (error) {
        yield put(fetchMovieDetailsError());
    }
};

export function* movieDetailsSaga() {
    yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
};