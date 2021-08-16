import { useEffect, useState } from "react";
import axios from "axios";

export const useAPIData = () => {
    const [movieData, setMovieData] = useState({
        status: "loading",
        movieData: null
    });

    useEffect(() => {
        const getAPIData = async () => {
            try {
                const APIKey = 'api_key=3af561a12389e6d632bf79207cb88b6c';
                const APIAdress = 'https://api.themoviedb.org/3/';
                const movieId = '20';
                const APIConfigurarion = `https://api.themoviedb.org/3/configuration?${APIKey}`;
                // const  movieKeyWordsAPI = `https://api.themoviedb.org/3/movie/18/keywords?api_key=${APIKey}`;
                const movieDetailsAPI = `${APIAdress}movie/${movieId}?${APIKey}`;
                const response = await axios.get(movieDetailsAPI);
                const response2 = await axios.get(APIConfigurarion);
                console.log(response2);
                setMovieData({
                    status: "success",
                    movieData: response
                });
            } catch (error) {
                console.log(error);
            };
        };
        setTimeout(getAPIData, 2_000);
    }, []);
    return movieData;
};

