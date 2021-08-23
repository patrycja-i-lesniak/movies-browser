import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navigation } from "../../common/Navigation";
import { PersonList } from "../../features/PopularPeople";
import MovieList from "../../features/PopularMovies";
import { MovieDetails } from "../../features/PopularMovies/MovieDetails";
import { toMovie, toMovies, toPeople, toProfile } from "./routes";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toProfile()}>
          <p>5. Profile</p>
        </Route>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toMovies()}>
          <MovieList />
        </Route>
        <Route path={toPeople()}>
          <PersonList />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};
