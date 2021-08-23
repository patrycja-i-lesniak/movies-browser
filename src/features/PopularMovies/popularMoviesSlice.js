import { createSlice } from "@reduxjs/toolkit";
import { genres } from "../../genres";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        popularMoviesData: null,
        popularMoviesGenres: genres,
    },
    reducers: {
        fetchPopularMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            popularMoviesData: movieDetails.popularMoviesData,
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
    fetchPopularMoviesLoading,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = popularMoviesSlice.actions;

export const selectPopularMoviesDataState = state => state.popularMovies;

export const selectPopularMoviesData = state => selectPopularMoviesDataState(state).popularMoviesData;
export const selectGenres = state => selectPopularMoviesDataState(state).popularMoviesGenres;
export const selectPopularMoviesStatus = state => selectPopularMoviesDataState(state).status;

export default popularMoviesSlice.reducer;