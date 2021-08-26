import {  useSelector } from "react-redux";

import {useFetchList} from "../useFetchList.js";
import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Pagination } from "../../common/Pagination";
import { fetchMoviesLoading, selectMoviesStatus } from "./moviesSlice";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";

const MoviesList = () => {
    useFetchList(fetchMoviesLoading);
    const status = useSelector(selectMoviesStatus);

    const MovieListContent = () => {
        switch (status) {
            case "loading":
                return <Loader />;
            case "success":
                return (
                    <>
                        <MovieAndPersonWrapper>
                            <MovieTiles />
                        </MovieAndPersonWrapper>
                        <Pagination />
                    </>
                );
            case "error":
                return <Error />;
            default:
                return <NoResults />;
        };
    };

    return (
        <MovieListContent />
    );
};

export default MoviesList;
