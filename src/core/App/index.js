import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Error from "../../common/Error";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};
