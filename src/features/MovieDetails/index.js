import {
    MovieTile,
    MobileMovieTile,
} from "../Tiles";
import Header from "./Header";
import { Wrapper } from "./styled";

export const MovieDetails = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <MovieTile />
                {/* <MobileMovieTile /> */}
            </Wrapper>
        </>
    )
};