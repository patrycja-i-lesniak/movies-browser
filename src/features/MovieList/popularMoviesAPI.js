import axios from "axios";

import { APIKey } from "../../APIKey";
import { pathAPI } from "../../pathAPI";

export const getPopularMoviesData = page =>
    axios.get(`${pathAPI}movie/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);