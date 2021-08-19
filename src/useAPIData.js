import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryParameter } from "./useQueryParameter";
import searchQueryParamName from "./searchQueryParamName";

export const useAPIData = () => {
    const [moviesAndPeopleData, setMoviesAndPeopleData] = useState({
        status: "loading",
        movieData: null
    });

    const page = useQueryParameter(searchQueryParamName) || "1";

    useEffect(() => {
        const getAPIData = async () => {
            try {
                const APIKey = "api_key=3af561a12389e6d632bf79207cb88b6c";
                const pathAPI = "https://api.themoviedb.org/3/";

                const movieId = "21";
                const personId = "1039305";


                const popularMoviesAPI = `${pathAPI}movie/popular?${APIKey}&language=en-US&page=${page}`;
                const popularMoviesData = await axios.get(popularMoviesAPI);

                const movieDetailsAPI = `${pathAPI}movie/${movieId}?${APIKey}`;
                const movieData = await axios.get(movieDetailsAPI);

                const creditsAPI = `${pathAPI}movie/${movieId}/credits?${APIKey}`;
                const creditsData = await axios.get(creditsAPI);

                // const popularPeopleAPI = `${pathAPI}person/popular?${APIKey}&language=en-US&page=${page}`;
                // const popularPeopleData = await axios.get(popularPeopleAPI);

                const personAPI = `${pathAPI}person/${personId}/movie_credits?${APIKey}`;
                const personData = await axios.get(personAPI);

                const personCreditsAPI = `${pathAPI}movie/${movieId}/credits?${APIKey}`;
                const personCreditsData = await axios.get(personCreditsAPI);

                setMoviesAndPeopleData({
                    status: "success",
                    popularMoviesData,
                    movieData,
                    creditsData,
                    // popularPeopleData,
                    personData,
                    personCreditsData
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
    }, [page]);
    return moviesAndPeopleData;
};

