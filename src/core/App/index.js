import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navigation } from "../../common/Navigation";
import MovieList from "../../features/PopularMovies";
import { MovieDetails } from "../../features/PopularMovies/MovieDetails";
import { toMovie, toMovies, toPeople, toProfile } from "./routes";
import { PopularPeopleList } from "../../features/PopularPeople";
import PersonDetails from "../../features/PopularPeople/PersonDetails";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toProfile()}>
          <PersonDetails/>
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
      </Switch>
    </HashRouter>
  );
};
