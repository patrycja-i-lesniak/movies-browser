import axios from "axios";
import { APIKey, APIPath } from "../../common/movieAPI";

export const getMovieData = movieID =>
    axios.get(`${APIPath}movie/${movieID}?${APIKey}&language=en-US`)
        .then(response => response.data);