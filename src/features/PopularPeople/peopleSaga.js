import { takeEvery, call, put } from "@redux-saga/core/effects";
import { getPopularPeopleData } from "./peopleAPI";
import { fetchPeopleError, fetchPeopleLoading, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleDataHandler({ payload: page }) {
    try {
        const popularPeopleData = yield call(getPopularPeopleData, page);
        yield put(fetchPeopleSuccess(popularPeopleData));
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

export function* peopleSaga() {
    yield takeEvery(fetchPeopleLoading.type, fetchPeopleDataHandler);
};