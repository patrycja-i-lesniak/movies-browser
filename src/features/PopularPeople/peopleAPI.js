import axios from 'axios';
import { APIKey, APIPath } from '../../API';

export const getPopularPeopleData = (page) =>
  axios
    .get(`${APIPath}person/popular?${APIKey}&language=en-US&page=${page}`)
    .then((response) => response.data);

export const getSearchPeopleData = ({ page, searchQuery }) =>
  axios
    .get(
      `${APIPath}search/person?${APIKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
    )
    .then((response) => response.data);
