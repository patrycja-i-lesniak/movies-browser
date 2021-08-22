import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { PersonList } from "../../features/PopularPeople";
import MovieList from "../../features/PopularMovies";
import Error from "../../common/Error";
import {MovieDetails} from "../../features/PopularMovies/MovieDetails";
import PersonDetails from "../../features/PopularPeople/PersonDetails";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/profile/:id">
          <PersonDetails/>
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
          <PersonList />
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
};
