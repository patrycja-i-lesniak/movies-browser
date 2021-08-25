import { all } from "@redux-saga/core/effects";
import { movieDetailsSaga } from "../features/PopularMovies/MovieDetails/movieDetailsSaga";
import { popularMoviesSaga } from "../features/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "../features/PopularPeople/popularPeopleSaga";
import { personDetailsSaga } from "../features/PopularPeople/PersonDetails/personDetailsSaga";
import { moviesBrowserSaga } from "./App/moviesBrowserSaga";

export default function* saga() {
    yield all([
        moviesBrowserSaga(),
        popularPeopleSaga(),
        movieDetailsSaga(),
        popularMoviesSaga(),
        personDetailsSaga(),
    ]);
};