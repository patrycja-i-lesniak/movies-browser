import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        moviesData: null,
        moviesGenres: null,
    },
    reducers: {
        fetchMoviesLoading: () => ({
            status: "loading",
        }),
        fetchMoviesSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            moviesData: movieDetails.moviesData,
            moviesGenres: movieDetails.moviesGenres,
        }),
        fetchMoviesError: () => ({
            status: "error",
            moviesData: null,
            moviesGenres: null,
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
export const selectGenres = state => selectMoviesDataState(state).moviesGenres;
export const selectMoviesStatus = state => selectMoviesDataState(state).status;

export default moviesSlice.reducer;