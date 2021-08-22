import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../PopularMovies/MovieDetails/styled";
import { Pagination } from "../../common/Pagination";
import { useQueryParameter } from "../../useQueryParameter";
import searchQueryParamName from "../../searchQueryParamName";
import {
    fetchPopularPeopleLoading,
    selectStatus,
} from "./popularPeopleSlice";

export const PopularPeopleList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const page = useQueryParameter(searchQueryParamName) || "1";

    useEffect(() => {
        dispatch(fetchPopularPeopleLoading(page));
    }, [dispatch, page]);

    const PeopleListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <PeopleTiles title="Popular People" />
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
        <PeopleListContent />
    );
};