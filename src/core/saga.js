import { all } from "@redux-saga/core/effects";
import { popularPeopleSaga } from "../features/PersonList/popularPeopleSaga";

export default function* saga() {
    yield all([
        popularPeopleSaga(),
    ]);
}