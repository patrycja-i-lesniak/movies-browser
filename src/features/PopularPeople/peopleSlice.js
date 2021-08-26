import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "initial",
        peopleData: null,
        searchQuery: null,
    },
    reducers: {
        fetchPeopleLoading: () => ({
            status: "loading",
        }),
        fetchPeopleSuccess: (_, { payload: peopleData }) => ({
            status: "success",
            peopleData: peopleData.peopleList,
            searchQuery: peopleData.searchQuery,
        }),
        fetchPeopleError: () => ({
            status: "error",
            peopleData: null,
            searchQuery: null,
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
export const selectPeopleSearchQuery  = state => selectPeopleDataState(state).searchQuery;

export default peopleSlice.reducer;