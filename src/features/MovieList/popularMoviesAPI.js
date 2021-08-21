import axios from "axios";

import { APIKey } from "../../APIKey";
import { pathAPI } from "../../pathAPI";

export const getPopularMoviesData = page =>
    axios.get(`${pathAPI}movie/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);

export const getGenres = () =>
    axios.get(`${pathAPI}genre / movie / list?${APIKey}&language=en-US`)
        .then(response => response.data);