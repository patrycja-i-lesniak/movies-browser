import { Header } from "./Header";
import { Wrapper } from "./styled";
import { BigMovieTile } from "../Tiles/BigMovieTile";
import PeopleTiles from "../Tiles/PeopleTiles";
// import { useAPIData } from "../../useAPIData";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectStatus } from "./movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
                        <Wrapper>
                            <BigMovieTile />
                            <PeopleTiles title="Cast" />
                            <PeopleTiles title="Crew" />
                        </Wrapper>
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