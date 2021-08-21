import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieTiles from "../Tiles/MovieTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";
import { useQueryParameter } from "../../useQueryParameter";
import { paginationQueryParamName } from "../../queryParamNames";
import { selectPopularMoviesStatus, fetchPopularMoviesLoading } from "./popularMoviesSlice";
import { Pagination } from "../../common/Pagination";


const MovieList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);
    const page = useQueryParameter(paginationQueryParamName) || "1";

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