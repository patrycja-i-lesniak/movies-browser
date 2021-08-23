import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        moviesData: null,
        moviesGenres: null,
    },
    reducers: {
        fetchSearchMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesLoading: () => ({
            status: "loading",
        }),
        fetchMoviesSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            moviesData: movieDetails.moviesData,
            moviesGenres: movieDetails.popularMoviesGenres,
        }),
        fetchMoviesError: () => ({
            status: "error",
            moviesData: null,
            moviesGenres: null,
        }),
    }
});

export const {
    fetchSearchMoviesLoading,
    fetchPopularMoviesLoading,
    fetchMoviesSuccess,
    fetchMoviesError,
} = popularMoviesSlice.actions;

export const selectMoviesDataState = state => state.popularMovies;

export const selectMoviesData = state => selectMoviesDataState(state).moviesData;
export const selectGenres = state => selectMoviesDataState(state).moviesGenres;
export const selectPopularMoviesStatus = state => selectMoviesDataState(state).status;

export default popularMoviesSlice.reducer;