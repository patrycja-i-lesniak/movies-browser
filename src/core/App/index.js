import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navigation } from "../../common/Navigation";
import { PopularPeopleList } from "../../features/PopularPeople";
import MovieList from "../../features/PopularMovies";
import Error from "../../common/Error";
import { MovieDetails } from "../../features/PopularMovies/MovieDetails";
import PersonDetails from "../../features/PopularPeople/PersonDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBrowserLoading } from "./moviesBrowserSlice";
import { useEffect } from "react";
import { selectMoviesBrowserStatus } from "./moviesBrowserSlice";
import { toMovie, toMovies, toPeople, toProfile } from "./routes";

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
              <PopularPeopleList />
            </Route>
            <Route path="/">
              <Redirect to={toMovies()} />
            </Route>
          </Switch>);
      case "error":
        return <Error status={"noButton"} />;
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
