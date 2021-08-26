import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";
import { Pagination } from "../../common/Pagination";
import { useQueryParameter } from "../../common/useQueryParameter";
import { paginationQueryParamName } from "../../common/queryParamNames";
import {
    fetchPeopleLoading,
    selectStatus,
} from "./peopleSlice";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const page = useQueryParameter(paginationQueryParamName) || "1";

    useEffect(() => {
        dispatch(fetchPeopleLoading(page));
    }, [dispatch, page]);

    const PeopleListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <MovieAndPersonWrapper>
                            <PeopleTiles title="Popular people" />
                        </MovieAndPersonWrapper>
                        <Pagination pathName="/people" />
                    </>
                );
            case "error":
                return <Error />;
            default:
                return <NoResults />;
        };
    };

    return (
        <PeopleListContent />
    );
};