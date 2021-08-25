import axios from "axios";

import { APIKey, APIPath } from "../../API";

export const getPopularMoviesData = page =>
    axios.get(`${APIPath}movie/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);