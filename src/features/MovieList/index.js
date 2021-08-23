import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";
import { useQueryParameter } from "../../common/useQueryParameter";
import { paginationQueryParamName, searchQueryParamName } from "../../common/queryParamNames";

import { Pagination } from "../../common/Pagination";
import { fetchPopularMoviesLoading, fetchSearchMoviesLoading, selectMoviesStatus } from "./moviesSlice";


const MovieList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectMoviesStatus);
    const page = useQueryParameter(paginationQueryParamName) || "1";
    const searchQuery = useQueryParameter(searchQueryParamName);

    useEffect(() => {
        dispatch(searchQuery ? fetchSearchMoviesLoading({page, searchQuery}) : fetchPopularMoviesLoading(page));
    }, [dispatch, page, searchQuery]);

    const MovieListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <MovieTiles title="Popular movies" />
                        </Wrapper>
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

export default MovieList;