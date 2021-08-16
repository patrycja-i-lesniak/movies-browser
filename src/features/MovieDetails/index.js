import { Header } from "./Header";
import { Wrapper } from "./styled";
import { BigMovieTile } from "../Tiles/BigMovieTile";
import PeopleTiles from "../Tiles/PeopleTiles";
import { useAPIData } from "./useAPIData";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";

export const MovieDetails = () => {
    const APIData = useAPIData();

    const MovieDetailsContent = () => {
        switch (APIData.status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Header movieData={APIData.movieData.data} />
                        <Wrapper>
                            <BigMovieTile movieData={APIData.movieData.data} />
                            <PeopleTiles title="cast" creditsData={APIData.creditsData.data} />
                            <PeopleTiles title="crew" creditsData={APIData.creditsData.data} />
                        </Wrapper>
                    </>);
            case "error":
                return (<Error />);
            default:
                return <NoResults />;
        };
    };

    return (
        <MovieDetailsContent />
    );
};