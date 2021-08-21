import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
        status: "initial",
        popularPeopleData: null,
    },
    reducers: {
        fetchPopularPeopleLoading: () => ({
            status: "loading",
        }),
        fetchPopularPeopleSuccess: (_, { payload: popularPeopleData }) => ({
            status: "success",
            popularPeopleData,
        }),
        fetchPopularPeopleError: () => ({
            status: "error",
            popularPeopleData: null,
        }),
    }
});

export const {
    fetchPopularPeopleLoading,
    fetchPopularPeopleSuccess,
    fetchPopularPeopleError,
} = popularPeopleSlice.actions;

export const selectPopularPeopleDataState = state => state.popularPeople;

export const selectPopularPeopleData = state => selectPopularPeopleDataState(state).popularPeopleData;
export const selectStatus = state => selectPopularPeopleDataState(state).status;

export default popularPeopleSlice.reducer;