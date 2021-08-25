import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import moviesBrowserReducer from "./App/moviesBrowserSlice";
import popularMoviesReducer from "../features/PopularMovies/popularMoviesSlice";
import popularPeopleReducer from "../features/PopularPeople/popularPeopleSlice";
import movieDetailsReducer from "../features/PopularMovies/MovieDetails/movieDetailsSlice";
import personDetailsReducer from "../features/PopularPeople/PersonDetails/personDetailsSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        moviesBrowser: moviesBrowserReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
        movieDetails: movieDetailsReducer,
        personDetails: personDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;