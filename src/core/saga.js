import { all } from '@redux-saga/core/effects';

import { movieDetailsSaga } from '../features/PopularMovies/MovieDetails/movieDetailsSaga';
import { moviesSaga } from '../features/PopularMovies/moviesSaga';
import { peopleSaga } from '../features/PopularPeople/peopleSaga';
import { personDetailsSaga } from '../features/PopularPeople/PersonDetails/personDetailsSaga';
import { moviesBrowserSaga } from './App/movieBrowserSaga';

export default function* saga() {
  yield all([
    moviesBrowserSaga(),
    peopleSaga(),
    moviesSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
  ]);
}
