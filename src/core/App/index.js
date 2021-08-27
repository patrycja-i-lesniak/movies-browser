import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navigation } from "../../common/Navigation";

import MovieList from "../../features/PopularMovies";
import Error from "../../common/Error";
import { MovieDetails } from "../../features/PopularMovies/MovieDetails";
import PersonDetails from "../../features/PopularPeople/PersonDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBrowserLoading } from "./movieBrowserSlice";
import { useEffect } from "react";
import { selectMoviesBrowserStatus } from "./movieBrowserSlice";
import { toMovie, toMovies, toPeople, toProfile } from "./routes";
import { PeopleList } from "../../features/PopularPeople";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesBrowserLoading());
  }, [dispatch]);

  const status = useSelector(selectMoviesBrowserStatus);

  const AppContent = () => {
    switch (status) {
      case "success":
        return (
          <Switch>
            <Route path={toProfile()}>
              <PersonDetails />
            </Route>
            <Route path={toMovie()}>
              <MovieDetails />
            </Route>
            <Route path={toMovies()}>
              <MovieList />
            </Route>
            <Route path={toPeople()}>
              <PeopleList />
            </Route>
            <Route path="/">
              <Redirect to={toMovies()} />
            </Route>
          </Switch>);
      case "error":
        return <Error reloadButton />;
      default:
        return <></>;
    };
  };

  return (
    <HashRouter>
      <Navigation />
      <AppContent />
    </HashRouter>
  );
};
