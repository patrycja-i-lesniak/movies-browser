import { takeLatest, call, put } from "@redux-saga/core/effects";
import {getSearchPeopleData, getPopularPeopleData} from "./peopleAPI";
import { fetchPeopleError, fetchPeopleLoading, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleDataHandler({ payload: location }) {
    try {
        const peopleData = yield location.searchQuery
            ? call(getSearchPeopleData, location)
            : call(getPopularPeopleData, location.page);

        const searchQuery = location.searchQuery;

        yield put(fetchPeopleSuccess({ peopleData, searchQuery }));
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

export function* peopleSaga() {
    yield takeLatest(fetchPeopleLoading.type, fetchPeopleDataHandler);
};