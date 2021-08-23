import { all } from "@redux-saga/core/effects";

import { movieDetailsSaga } from "../features/PopularMovies/MovieDetails/movieDetailsSaga";
import { moviesSaga } from "../features/PopularMovies/moviesSaga";
import { popularPeopleSaga } from "../features/PopularPeople/popularPeopleSaga";

export default function* saga() {
    yield all([
        popularPeopleSaga(),
        moviesSaga(),
        movieDetailsSaga(),
    ]);
};