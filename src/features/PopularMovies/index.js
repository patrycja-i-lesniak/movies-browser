import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";
import { Pagination } from "./Pagination";
import { useQueryParameter } from "../../useQueryParameter";
import searchQueryParamName from "../../searchQueryParamName";
import { selectPopularMoviesStatus, fetchPopularMoviesLoading } from "./popularMoviesSlice";

const PopularMoviesList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);
    const page = useQueryParameter(searchQueryParamName) || "1";

    useEffect(() => {
        dispatch(fetchPopularMoviesLoading(page));
    }, [dispatch, page]);

    const MovieListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <MovieAndPersonWrapper>
                            <MovieTiles title="Popular movies" />
                        </MovieAndPersonWrapper>
                        <Pagination />
                    </>);
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

export default PopularMoviesList;