import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import popularMoviesReducer from "../features/PopularMovies/popularMoviesSlice";
import popularPeopleReducer from "../features/PopularPeople/popularPeopleSlice";
import movieDetailsReducer from "../features/PopularMovies/MovieDetails/movieDetailsSlice";
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