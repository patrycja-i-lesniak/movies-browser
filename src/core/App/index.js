import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MovieList } from "../../features/MovieList";
import { PersonList } from "../../features/PersonList";
import { MovieDetails } from "../../features/MovieDetails";
import { Wrapper } from "../../common/Wrapper";
import Error from "../../common/Error";


export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Wrapper>
        <Switch>
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
        <MovieDetails />
      </Wrapper>
    </HashRouter>
  );
};
