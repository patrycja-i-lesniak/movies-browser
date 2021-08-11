import {
    MovieTile,
    MobileMovieTile,
} from "../Tiles";
import Header from "./Header";
import { Wrapper } from "./styled";
import { BigMovieTile } from "../Tiles/BigMovieTile";

export const MovieDetails = () => {
    return (
        <>
            <Header />
            <Wrapper>
               <BigMovieTile />
            </Wrapper>
        </>
    );
};