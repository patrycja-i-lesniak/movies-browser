import { all } from "@redux-saga/core/effects";
import { movieDetailsSaga } from "../features/PopularMovies/MovieDetails/movieDetailsSaga";
import { popularMoviesSaga } from "../features/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "../features/PopularPeople/popularPeopleSaga";

export default function* saga() {
    yield all([
        popularPeopleSaga(),
        movieDetailsSaga(),
        popularMoviesSaga(),
    ]);
};