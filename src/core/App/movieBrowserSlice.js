import { createSlice } from "@reduxjs/toolkit";

const MoviesBrowserSlice = createSlice({
    name: "MoviesBrowser",
    initialState: {
        status: "initial",
        genres: null,
        configuration: null,
    },
    reducers: {
        fetchMoviesBrowserLoading: () => ({
            status: "loading",
        }),
        fetchMoviesBrowserSuccess: (_, { payload: moviesBrowserData}) => ({
            status: "success",
            genres: moviesBrowserData.moviesBrowserGenres,
            configuration: moviesBrowserData.configuration,
        }),
        fetchMoviesBrowserError: () => ({
            status: "error",
            genres: null,
            configuration: null,
        }),
    }
});

export const {
    fetchMoviesBrowserLoading,
    fetchMoviesBrowserSuccess,
    fetchMoviesBrowserError,
} = MoviesBrowserSlice.actions;

export const selectMoviesBrowserState = state => state.moviesBrowser;

export const selectMoviesBrowserStatus = state => selectMoviesBrowserState(state).status;

export const selectGenres = state => selectMoviesBrowserState(state).genres;
export const selectConfiguration = state => selectMoviesBrowserState(state).configuration;

export default MoviesBrowserSlice.reducer;