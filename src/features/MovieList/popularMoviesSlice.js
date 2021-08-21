import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        status: "initial",
        popularMoviesData: null,
        popularMoviesGenres: null,
    },
    reducers: {
        fetchPopularMoviesLoading: () => ({
            status: "loading",
        }),
        fetchPopularMoviesSuccess: (_, { payload: popularMoviesData }) => ({
            status: "success",
            popularMoviesData,
        }),
        // fetchPopularMoviesSuccess: (_, { payload: movieDetails }) => ({
        //     status: "success",
        //     popularMoviesData: movieDetails.popularMoviesData,
        //     popularMoviesGenres: movieDetails.popularMoviesGenres,
        // }),
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
export const selectPopularMoviesStatus = state => selectPopularMoviesDataState(state).status;

export default popularMoviesSlice.reducer;