import { HashRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MovieList } from "../../features/MovieList";
import { PersonList } from "../../features/PersonList";


export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route patch="/movies/:id">
          <MovieList />
        </Route>
        <Route patch="/people/:id">
          <PersonList />
        </Route>
        <Route patch="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
