import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieTiles from "../Tiles/MovieTiles";
import { useAPIData } from "../../useAPIData";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";
import { Pagination } from "../MovieList/Pagination";
import { useQueryParameter } from "../../useQueryParameter";
import searchQueryParamName from "../../searchQueryParamName";
import { selectPopularMoviesStatus, fetchPopularMoviesLoading } from "./popularMoviesSlice";

const MovieList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);

    const page = useQueryParameter(searchQueryParamName) || "1";

    useEffect(() => {
        dispatch(fetchPopularMoviesLoading(page));
    }, [dispatch, page]);

    const APIData = useAPIData();

    const MovieListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <MovieTiles title="Popular movies"
                                movieData={APIData.movieData.data}
                                moviesGenresData={APIData.moviesGenresData.data}
                            />
                        </Wrapper>
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

export default MovieList;