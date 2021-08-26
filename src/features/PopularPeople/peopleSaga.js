import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getPopularPeopleData, getSearchPeopleData } from "./peopleAPI";
import { fetchPeopleError, fetchPeopleLoading, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleDataHandler({ payload: location }) {
    try {
        const peopleList = yield location.searchQuery
            ? call(getSearchPeopleData, location)
            : call(getPopularPeopleData, location.page);

        const searchQuery = location.searchQuery;

        yield put(fetchPeopleSuccess({ peopleList, searchQuery }));
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

export function* peopleSaga() {
    yield takeLatest(fetchPeopleLoading.type, fetchPeopleDataHandler);
};