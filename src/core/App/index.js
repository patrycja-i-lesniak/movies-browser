import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { PersonList } from "../../features/PersonList";
import MovieList from "../../features/MovieList";
import Error from "../../common/Error";
import {MovieDetails} from "../../features/MovieDetails";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/profile/:id">
          <p>5. Profile</p>
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
