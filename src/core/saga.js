import { all } from "@redux-saga/core/effects";

import { movieDetailsSaga } from "../features/PopularMovies/MovieDetails/movieDetailsSaga";
import { moviesSaga } from "../features/PopularMovies/moviesSaga";
import { popularPeopleSaga } from "../features/PopularPeople/popularPeopleSaga";
import { personDetailsSaga } from "../features/PopularPeople/PersonDetails/personDetailsSaga";
import { moviesBrowserSaga } from "./App/movieBrowserSaga";

export default function* saga() {
    yield all([
        moviesBrowserSaga(),
        popularPeopleSaga(),
        moviesSaga(),
        movieDetailsSaga(),
        personDetailsSaga(),
    ]);
};