import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
        status: "initial",
        popularPeopleData: null,
        // movieData: null,
        // creditsData: null
    },
    reducers: {
        fetchPopularPeopleLoading: state => {
            state.status = "loading";
        },
        fetchPopularPeopleSuccess: (state, { payload: popularMoviesData }) => {
            state.status = "loading";
            state.popularMoviesData = popularMoviesData;
        },
        fetchPopularPeopleError: state => {
            state.status = "error";
        },
    }
});

export const {
    fetchPopularPeopleLoading,
    fetchPopularPeopleSuccess,
    fetchPopularPeopleError,
} = popularPeopleSlice.actions;

export const selectPopularPeopleDataState = state => state.popularMoviesData;

export const selectPopularPeopleData = state => selectPopularPeopleDataState(state).popularPeopleData;
export const selectPopularPeopleLoading = state => selectPopularPeopleDataState(state).status === "loading";

export const getPopularPersonByyId = (state, personId) =>
    selectPopularPeopleData(state).find(({ id }) => id === personId);

export const selectPopularPeopleDataByQuery = (state, query) => {
    const popularPeopleData = selectPopularPeopleData(state);

    if (!query || query.trim() === "") {
        return popularPeopleData;
    }
    return popularPeopleData.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default popularPeopleSlice.reducer;