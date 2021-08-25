import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { useQueryParameter } from "../../common/useQueryParameter";
import { paginationQueryParamName, searchQueryParamName } from "../../common/queryParamNames";
import { Pagination } from "../../common/Pagination";
import { fetchMoviesLoading, selectMoviesStatus } from "./moviesSlice";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";

const MoviesList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectMoviesStatus);
    const page = useQueryParameter(paginationQueryParamName);
    const searchQuery = useQueryParameter(searchQueryParamName);

    useEffect(() => {
        if (searchQuery && !page) {
            const timeoutID = setTimeout(() => {
                dispatch(fetchMoviesLoading({ page, searchQuery }));
            }, 1_000);

            return () => clearTimeout(timeoutID);
        } else {
            dispatch(fetchMoviesLoading({ page, searchQuery }));
        }
    }, [dispatch, page, searchQuery]);

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
                        <Pagination pathName="/movies" />
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
