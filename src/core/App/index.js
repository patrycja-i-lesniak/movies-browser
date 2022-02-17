import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { theme, darkTheme } from '../../core/App/theme.js';
import { Navigation } from '../../common/Navigation';
import { GlobalStyle } from '../../core/App/GlobalStyle';
import MovieList from '../../features/PopularMovies';
import Error from '../../common/Error';
import { MovieDetails } from '../../features/PopularMovies/MovieDetails';
import PersonDetails from '../../features/PopularPeople/PersonDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesBrowserLoading } from './movieBrowserSlice';
import { useEffect } from 'react';
import { selectMoviesBrowserStatus } from './movieBrowserSlice';
import { toMovie, toMovies, toPeople, toProfile } from './routes';
import { PeopleList } from '../../features/PopularPeople';
import { Footer } from '../../../src/common/Footer';
import { selectIsDarkTheme } from '../../common/ThemeSwitch/themeSlice';
import { ThemeSwitch } from '../../common/ThemeSwitch';
import { WelcomeImage, WelcomeLoader } from './welcomeLoader.js';
import favicon from '../../features/Images/favicon.svg';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesBrowserLoading());
  }, [dispatch]);

  const status = useSelector(selectMoviesBrowserStatus);
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const AppContent = () => {
    switch (status) {
      case 'loading':
        return (
          <WelcomeLoader>
            <WelcomeImage src={favicon} alt="welcome image" />
          </WelcomeLoader>
        );
      case 'success':
        return (
          <>
            <Navigation />
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
            </Switch>
            <Footer>
              <p>
                © 2021 | Coded by Wojciech Bylica, Karol Cieśluk, Patrycja
                Leśniak
              </p>
              <ThemeSwitch />
            </Footer>
          </>
        );
      case 'error':
        return <Error reloadButton />;
      default:
        return <></>;
    }
  };

  return (
    <HashRouter>
      <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
        <Normalize />
        <GlobalStyle />
        <AppContent />
      </ThemeProvider>
    </HashRouter>
  );
};
