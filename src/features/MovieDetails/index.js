import {
    MovieTile,
    MobileMovieTile,
} from "../Tiles";
import Header from "./Header";
import { Wrapper } from "./styled";

export const MovieDetails = () => {
    return (
        <Wrapper>
            <Header />
            <MovieTile />
            {/* <MobileMovieTile /> */}
        </Wrapper>
    )
};