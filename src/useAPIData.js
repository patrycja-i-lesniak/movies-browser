import { useEffect, useState } from "react";
import axios from "axios";

import { pathAPI } from "./pathAPI";
import { APIKey } from "./APIKey";

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

                const moviesGenresData = await axios.get(`${pathAPI}genre/movie/list?${APIKey}&language=en-US`);
                // console.log(moviesGenresData);

                const movieDetailsAPI = `${pathAPI}movie/${movieId}?${APIKey}`;
                const movieData = await axios.get(movieDetailsAPI);

                const creditsAPI = `${pathAPI}movie/${movieId}/credits?${APIKey}`;
                const creditsData = await axios.get(creditsAPI);

                const personAPI = `${pathAPI}person/${personId}/movie_credits?${APIKey}`;
                const personData = await axios.get(personAPI);

                const personCreditsAPI = `${pathAPI}movie/${movieId}/credits?${APIKey}`;
                const personCreditsData = await axios.get(personCreditsAPI);

                setMoviesAndPeopleData({
                    status: "success",
                    // popularMoviesData,
                    movieData,
                    creditsData,
                    // popularPeopleData,
                    personData,
                    personCreditsData,
                    moviesGenresData,
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

