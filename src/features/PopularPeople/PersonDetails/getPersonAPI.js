import axios from 'axios';
import { APIKey, APIPath } from '../../../API';

export const getPersonCredits = (personID) =>
  axios
    .get(`${APIPath}person/${personID}/credits?${APIKey}&language=en-US`)
    .then((response) => response.data);

export const getPersonData = (personID) =>
  axios
    .get(`${APIPath}person/${personID}?${APIKey}&language=en-US`)
    .then((response) => response.data);
