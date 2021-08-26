import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "initial",
        peopleData: null,
    },
    reducers: {
        fetchPeopleLoading: () => ({
            status: "loading",
        }),
        fetchPeopleSuccess: (_, { payload: popularPeopleData }) => ({
            status: "success",
            peopleData: popularPeopleData,
        }),
        fetchPeopleError: () => ({
            status: "error",
            peopleData: null,
        }),
    }
});

export const {
    fetchPeopleLoading,
    fetchPeopleSuccess,
    fetchPeopleError,
} = peopleSlice.actions;

export const selectPeopleDataState = state => state.people;

export const selectPeopleData = state => selectPeopleDataState(state).peopleData;
export const selectStatus = state => selectPeopleDataState(state).status;

export default peopleSlice.reducer;