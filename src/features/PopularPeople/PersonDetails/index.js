import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import PersonTile from "../../Tiles/PersonTile";
import MovieTiles from "../../Tiles/MovieTiles";
import { Loader } from "../../../common/Loader";
import Error from "../../../common/Error";
import { NoResults } from "../../../common/NoResults";
import { MovieAndPersonWrapper } from "../../../common/Wrappers/MovieAndPersonWrapper";
import { fetchPersonDetails, selectStatus } from "./personDetailsSlice";

const PersonDetails = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [dispatch, id]);
    
    const PersonDetailsContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <MovieAndPersonWrapper>
                            <PersonTile />
                            <MovieTiles title="cast"/>
                            <MovieTiles title="crew" />
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
        <PersonDetailsContent />
    );
};

export default PersonDetails;
