import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import popularMoviesReducer from "../features/MovieList/popularMoviesSlice";
import popularPeopleReducer from "../features/PersonList/popularPeopleSlice";
import movieDetailsReducer from "../features/MovieDetails/movieDetailsSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
        movieDetails: movieDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;