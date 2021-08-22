import PersonTile from "../../Tiles/PersonTile";
// import MovieTiles from "../../Tiles/MovieTiles";
import { useAPIData } from "../../../useAPIData";
// import {useSelector} from "react-redux";
import {Loader} from "../../../common/Loader";
import Error from "../../../common/Error";
import { NoResults } from "../../../common/NoResults";
import { Wrapper } from "./styled";



const PersonDetails = () => {
    const APIData = useAPIData();
    // const status = useSelector(selectStatus);
    const PersonDetailsContent = () => {
        switch (APIData.status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <PersonTile />
                            {/* <MovieTiles title="Cast" />
                            <MovieTiles title="Crew" /> */}
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
