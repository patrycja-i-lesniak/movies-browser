import { Header } from "./Header";
import { Wrapper } from "./styled";
import { BigMovieTile } from "../Tiles/BigMovieTile";
import PeopleTiles from "../Tiles/PeopleTiles";

export const MovieDetails = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <BigMovieTile />
                <PeopleTiles title="cast"/>
                <PeopleTiles title="crew"/>
            </Wrapper>
        </>
    );
};