import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import PersonTile from "../../Tiles/PersonTile";
import MovieTiles from "../../Tiles/MovieTiles";
import { Loader } from "../../../common/Loader";
import Error from "../../../common/Error";
import { NoResults } from "../../../common/NoResults";
import { Wrapper } from "./styled";
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
                        <Wrapper>
                            <PersonTile />
                            <MovieTiles person="true" title="Movie - cast" />
                            <MovieTiles person="true" title="Movie - crew" />
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
        <PersonDetailsContent />
    );
};

export default PersonDetails;
