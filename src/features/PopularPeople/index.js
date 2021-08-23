import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Pagination } from "../../common/Pagination";
import { useQueryParameter } from "../../common/useQueryParameter";
import { paginationQueryParamName } from "../../common/queryParamNames";
import {
    fetchPopularPeopleLoading,
    selectStatus,
} from "./popularPeopleSlice";
import { Wrapper } from "../PopularMovies/MovieDetails/styled";

export const PersonList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const page = useQueryParameter(paginationQueryParamName) || "1";

    useEffect(() => {
        dispatch(fetchPopularPeopleLoading(page));
    }, [dispatch, page]);

    const PersonListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <PeopleTiles title="Popular People" />
                        </Wrapper>
                        <Pagination pathName="/people" />
                    </>);
            case "error":
                return <Error />;
            default:
                return <NoResults />;
        };
    };

    return (
        <PersonListContent />
    );
};