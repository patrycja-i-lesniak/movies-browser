import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import moviesReducer from "../features/PopularMovies/moviesSlice";
import peopleReducer from "../features/PopularPeople/peopleSlice";
import moviesBrowserReducer from "./App/movieBrowserSlice";
import movieDetailsReducer from "../features/PopularMovies/MovieDetails/movieDetailsSlice";
import personDetailsReducer from "../features/PopularPeople/PersonDetails/personDetailsSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        moviesBrowser: moviesBrowserReducer,
        people: peopleReducer,
        movieDetails: movieDetailsReducer,
        personDetails: personDetailsReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;