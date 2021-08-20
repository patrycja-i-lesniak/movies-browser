import { all } from "@redux-saga/core/effects";
import { popularMoviesSaga } from "../features/MovieList/popularPeopleSaga";
import { popularPeopleSaga } from "../features/PersonList/popularPeopleSaga";

export default function* saga() {
    yield all([
        popularPeopleSaga(),
        popularMoviesSaga(),
    ]);
}