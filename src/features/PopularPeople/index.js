import { useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { MovieAndPersonWrapper } from "../../common/Wrappers/MovieAndPersonWrapper";
import { Pagination } from "../../common/Pagination";
import {
    fetchPeopleLoading,
    selectPeopleData,
    selectPeopleStatus,
} from "./peopleSlice";
import { useFetchList } from "../useFetchList";

export const PeopleList = () => {
    useFetchList(fetchPeopleLoading);
    const status = useSelector(selectPeopleStatus);
    const peopleData = useSelector(selectPeopleData);

    const PeopleListContent = () => {
        switch (status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    peopleData.results.length
                        ? <>
                            <MovieAndPersonWrapper>
                                <PeopleTiles title="Popular people" />
                            </MovieAndPersonWrapper>
                            <Pagination />
                        </>
                        : <NoResults />
                );
            case "error":
                return <Error />;
            default:
                return <></>;
        };
    };

    return (
        <PeopleListContent />
    );
};