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
        fetchPeopleSuccess: (_, { payload: peopleData }) => ({
            status: "success",
            peopleData,
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
export const selectPeopleStatus = state => selectPeopleDataState(state).status;

export default peopleSlice.reducer;