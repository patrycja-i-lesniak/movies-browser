import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MovieList } from "../../features/MovieList";
import { PersonList } from "../../features/PersonList";
// import { MovieDetails } from "../../features/MovieDetails";
import Error from "../../common/Error";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
        <Switch>
          <Route path="/movies">
            {/* <MovieList /> */}
            <MovieDetails />
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
