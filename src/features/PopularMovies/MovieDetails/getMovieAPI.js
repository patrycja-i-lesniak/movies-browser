import axios from 'axios';
import { APIKey, APIPath } from '../../../API';

export const getMovieCredits = (movieID) =>
  axios
    .get(`${APIPath}movie/${movieID}/credits?${APIKey}&language=en-US`)
    .then((response) => response.data);

export const getMovieData = (movieID) =>
  axios
    .get(`${APIPath}movie/${movieID}?${APIKey}&language=en-US`)
    .then((response) => response.data);
