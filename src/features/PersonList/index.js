import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PeopleTiles from "../Tiles/PeopleTiles";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";
import { Pagination } from "../../common/Pagination";
import {
    fetchPopularPeopleLoading,
    selectStatus,
} from "./popularPeopleSlice";

export const PersonList = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const page = 2; // temporary. waiting for  pagination and reducer update to redux actions.

    useEffect(() => {
        dispatch(fetchPopularPeopleLoading(page));
    }, [dispatch]);

    // const APIData = useAPIData();

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
                        {/* <Pagination popularPeopleData={APIData.popularPeopleData.data} /> */}
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