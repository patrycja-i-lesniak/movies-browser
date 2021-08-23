import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        moviesData: null,
        popularMoviesGenres: null,
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
            popularMoviesGenres: movieDetails.popularMoviesGenres,
        }),
        fetchMoviesError: () => ({
            status: "error",
            moviesData: null,
            popularMoviesGenres: null,
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
export const selectGenres = state => selectMoviesDataState(state).popularMoviesGenres;
export const selectPopularMoviesStatus = state => selectMoviesDataState(state).status;

export default popularMoviesSlice.reducer;