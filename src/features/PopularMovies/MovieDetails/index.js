import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./Header";
import { MovieAndPersonWrapper } from "../../../common/Wrapper/MovieAndPersonWrapper";
import { BigMovieTile } from "../../Tiles/BigMovieTile";
import PeopleTiles from "../../Tiles/PeopleTiles";
import Error from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { NoResults } from "../../../common/NoResults";
import { fetchMovieDetails, selectStatus } from "./movieDetailsSlice";


export const MovieDetails = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    const MovieDetailsContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Header />
                        <MovieAndPersonWrapper>
                            <BigMovieTile />
                            <PeopleTiles title="Cast" />
                            <PeopleTiles title="Crew" />
                        </MovieAndPersonWrapper>
                    </>
                );
            case "error":
                return <Error />;
            default:
                return <NoResults />;
        };
    };

    return (
        <MovieDetailsContent />
    );
};