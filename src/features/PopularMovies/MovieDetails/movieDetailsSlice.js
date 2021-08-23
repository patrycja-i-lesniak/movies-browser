import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        status: "initial",
        movieData: null,
        movieCredits: null,
    },
    reducers: {
        fetchMovieDetails: () => ({
            status: "loading",
        }),
        fetchMovieDetailsSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            movieData: movieDetails.movieData,
            movieCredits: movieDetails.movieCredits,
        }),
        fetchMovieDetailsError: () => ({
            status: "error",
            movieData: null,
            movieCredits: null,
        }),
    }
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;

export const selectStatus = state => selectMovieDetailsState(state).status;
export const selectMovieData = state => selectMovieDetailsState(state).movieData;
export const selectMovieCredits = state => selectMovieDetailsState(state).movieCredits;

export default movieDetailsSlice.reducer;