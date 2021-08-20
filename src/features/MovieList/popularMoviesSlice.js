import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        popularPeopleData: null,
    },
    reducers: {
        fetchPopularMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesSuccess: (_, { payload: popularMoviesData }) => ({
            status: "success",
            popularMoviesData,
        }),
        fetchPopularMoviesError: () => ({
            status: "error",
            popularMoviesData: null,
        }),
    }
});

export const {
    fetchPopularMoviesLoading,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = popularMoviesSlice.actions;

export const selectPopularMoviesDataState = state => state.popularMovies;

export const selectPopularMoviesData = state => selectPopularMoviesDataState(state).popularMoviesData;
export const selectPopularMoviesStatus = state => selectPopularMoviesDataState(state).status;

export default popularMoviesSlice.reducer;