import { useEffect, useState } from "react";
import axios from "axios";

import { APIKey, APIPath } from "../src/API";

export const useAPIData = () => {
    const [moviesAndPeopleData, setMoviesAndPeopleData] = useState({
        status: "loading",
        movieData: null
    });

    useEffect(() => {
        const getAPIData = async () => {
            try {
                const movieId = "21";
                const personId = "1039305";

                const movieDetailsAPI = `${APIPath}movie/${movieId}?${APIKey}`;
                const movieData = await axios.get(movieDetailsAPI);

                const creditsAPI = `${APIPath}movie/${movieId}/credits?${APIKey}`;
                const creditsData = await axios.get(creditsAPI);

                const personAPI = `${APIPath}person/${personId}/movie_credits?${APIKey}`;
                const personData = await axios.get(personAPI);

                const personCreditsAPI = `${APIPath}movie/${movieId}/credits?${APIKey}`;
                const personCreditsData = await axios.get(personCreditsAPI);

                setMoviesAndPeopleData({
                    status: "success",
                    // popularMoviesData,
                    movieData,
                    creditsData,
                    // popularPeopleData,
                    personData,
                    personCreditsData,
                    // moviesGenresData,
                });
            } catch (error) {
                setMoviesAndPeopleData({
                    status: "error"
                });
            };
        };
        const timeoutID = setTimeout(
            getAPIData, 1_000);

        return () => clearTimeout(timeoutID);
    }, []);
    return moviesAndPeopleData;
};

