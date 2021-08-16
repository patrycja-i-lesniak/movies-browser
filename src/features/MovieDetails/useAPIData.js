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
                const movieId = '21';

                const movieDetailsAPI = `${APIAdress}movie/${movieId}?${APIKey}`;
                const response = await axios.get(movieDetailsAPI);

                const creditsAPI = `${APIAdress}movie/${movieId}/credits?${APIKey}`;
                const response2 = await axios.get(creditsAPI);

                setMovieData({
                    status: "success",
                    movieData: response,
                    creditsData: response2
                });

            } catch (error) {
                setMovieData({
                    status: "error"
                });
            };
        };
        setTimeout(getAPIData, 2_000);
    }, []);
    return movieData;
};

