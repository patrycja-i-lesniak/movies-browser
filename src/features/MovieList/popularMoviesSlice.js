import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        popularMoviesData: null,
        popularMoviesGenres: null,
    },
    reducers: {
        fetchSearchMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            popularMoviesData: movieDetails.moviesData,
            popularMoviesGenres: movieDetails.popularMoviesGenres,
        }),
        fetchPopularMoviesError: () => ({
            status: "error",
            popularMoviesData: null,
            popularMoviesGenres: null,
        }),
    }
});

export const {
    fetchSearchMoviesLoading,
    fetchPopularMoviesLoading,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = popularMoviesSlice.actions;

export const selectPopularMoviesDataState = state => state.popularMovies;

export const selectPopularMoviesData = state => selectPopularMoviesDataState(state).popularMoviesData;
export const selectGenres = state => selectPopularMoviesDataState(state).popularMoviesGenres;
export const selectPopularMoviesStatus = state => selectPopularMoviesDataState(state).status;

export default popularMoviesSlice.reducer;