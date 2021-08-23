import axios from "axios";
import { APIKey, APIPath } from "../../common/movieAPI";

export const getMovieCredits = movieID =>
    axios.get(`${APIPath}movie/${movieID}/credits?${APIKey}&language=en-US`)
        .then(response => response.data);