import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        moviesData: null,
    },
    reducers: {
        fetchMoviesLoading: () => ({
            status: "loading",
        }),
        fetchMoviesSuccess: (_, { payload: moviesData }) => ({
            status: "success",
            moviesData: moviesData,
        }),
        fetchMoviesError: () => ({
            status: "error",
            moviesData: null,
        }),
    }
});

export const {
    fetchMoviesLoading,
    fetchMoviesSuccess,
    fetchMoviesError,
} = moviesSlice.actions;

export const selectMoviesDataState = state => state.popularMovies;

export const selectMoviesData = state => selectMoviesDataState(state).moviesData;
export const selectMoviesStatus = state => selectMoviesDataState(state).status;

export default moviesSlice.reducer;