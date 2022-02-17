import { takeEvery, call, put, all } from '@redux-saga/core/effects';

import { getPersonCredits, getPersonData } from './getPersonAPI';
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  fetchPersonDetailsSuccess,
} from './personDetailsSlice';

function* fetchPersonDetailsHandler({ payload: personID }) {
  try {
    const [personData, personCredits] = yield all([
      call(getPersonData, personID),
      call(getPersonCredits, personID),
    ]);
    yield put(fetchPersonDetailsSuccess({ personData, personCredits }));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeEvery(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
