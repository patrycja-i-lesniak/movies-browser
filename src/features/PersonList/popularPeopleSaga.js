import { takeEvery, delay, call, put } from "@redux-saga/core/effects";
import { getPopularPeopleData } from "./popularPeopleApi";
import { fetchPopularPeopleError, fetchPopularPeopleLoading, fetchPopularPeopleSuccess } from "./popularPeopleSlice";

function* fetchPopularPeopleDataHandler({ payload: page }) {
    try {
        yield delay(2_000);
        const popularPeopleData = yield call(getPopularPeopleData, page);
        yield put(fetchPopularPeopleSuccess(popularPeopleData));
    } catch (error) {
        yield put(fetchPopularPeopleError());
    }
};

export function* popularPeopleSaga() {
    yield takeEvery(fetchPopularPeopleLoading.type, fetchPopularPeopleDataHandler);
}