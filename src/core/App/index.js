import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { PopularPeopleList } from "../../features/PopularPeople";
import PopularMovieList from "../../features/PopularMovies";
import Error from "../../common/Error";
import { MovieDetails } from "../../features/PopularMovies/MovieDetails";
import PersonDetails from "../../features/PopularPeople/PersonDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBrowserLoading } from "./moviesBrowserSlice";
import { useEffect } from "react";
import { selectMoviesBrowserStatus } from "./moviesBrowserSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesBrowserLoading());
  }, [dispatch]);

  const status = useSelector(selectMoviesBrowserStatus);

  switch (status) {
    case "success":
      return (
        <HashRouter>
          <Navigation />
          <Switch>
            <Route path="/profile/:id">
              <PersonDetails />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <PopularMovieList />
            </Route>
            <Route path="/people">
              <PopularPeopleList />
            </Route>
            <Route path="/error">
              <Error />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </HashRouter>
      );
    case "error":
      return <Error />;
    default:
      return <></>;
  };
};
