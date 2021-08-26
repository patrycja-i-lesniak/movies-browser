import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        status: "initial",
        moviesData: null,
        searchQuery: null,
    },
    reducers: {
        fetchMoviesLoading: () => ({
            status: "loading",
        }),
        fetchMoviesSuccess: (_, { payload: movies }) => ({
            status: "success",
            moviesData: movies.moviesData,
            searchQuery: movies.searchQuery,
        }),
        fetchMoviesError: () => ({
            status: "error",
            moviesData: null,
            isSearching: null,
        }),
    }
});

export const {
    fetchMoviesLoading,
    fetchMoviesSuccess,
    fetchMoviesError,
} = moviesSlice.actions;

export const selectMoviesDataState = state => state.movies;

export const selectMoviesData = state => selectMoviesDataState(state).moviesData;
export const selectMoviesStatus = state => selectMoviesDataState(state).status;
export const selectMoviesSearchQuery = state => selectMoviesDataState(state).searchQuery;

export default moviesSlice.reducer;