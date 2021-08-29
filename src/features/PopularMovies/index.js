import { useSelector } from "react-redux";

import { useFetchList } from "../useFetchList.js";
import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Pagination } from "../../common/Pagination";
import { fetchMoviesLoading, selectMoviesData, selectMoviesStatus } from "./moviesSlice";
import { MovieAndPersonWrapper } from "../../common/styledCommonComponents/MovieAndPersonWrapper";

const MoviesList = () => {
    useFetchList(fetchMoviesLoading);
    const status = useSelector(selectMoviesStatus);
    const moviesData = useSelector(selectMoviesData);

    const MovieListContent = () => {
        switch (status) {
            case "loading":
                return <Loader />;
            case "success":
                return (
                    moviesData.results.length
                        ? <>
                            <MovieAndPersonWrapper>
                                <MovieTiles title="Popular movies" />
                            </MovieAndPersonWrapper>
                            <Pagination />
                        </>
                        : <NoResults />
                );
            case "error":
                return <Error reloadButton/>;
            default:
                return <></>;
        };
    };

    return (
        <MovieListContent />
    );
};

export default MoviesList;
