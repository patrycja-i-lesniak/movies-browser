import { takeLatest, call, put } from '@redux-saga/core/effects';

import { getPopularMoviesData, getSearchMoviesData } from './moviesAPI';
import {
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
} from './moviesSlice';

function* fetchMoviesDataHandler({ payload: location }) {
  try {
    const moviesData = yield location.searchQuery
      ? call(getSearchMoviesData, location)
      : call(getPopularMoviesData, location.page);

    const searchQuery = location.searchQuery;

    yield put(fetchMoviesSuccess({ moviesData, searchQuery }));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMoviesLoading.type, fetchMoviesDataHandler);
}
