import PeopleTiles from "../Tiles/PeopleTiles";
import { useAPIData } from "../../useAPIData";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";

export const PersonList = () => {
    const APIData = useAPIData();

    const PersonListContent = () => {
        switch (APIData.status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <PeopleTiles title="Popular People" popularPeopleData={APIData.popularPeopleData.data} />
                        </Wrapper>
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