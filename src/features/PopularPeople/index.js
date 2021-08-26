import { useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";
import { Pagination } from "../../common/Pagination";
import {
    fetchPeopleLoading,
    selectPeopleStatus,
} from "./peopleSlice";
import { useFetchList } from "../useFetchList";

export const PeopleList = () => {
    useFetchList(fetchPeopleLoading);
    const status = useSelector(selectPeopleStatus);

    const PeopleListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <MovieAndPersonWrapper>
                            <PeopleTiles />
                        </MovieAndPersonWrapper>
                        <Pagination />
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