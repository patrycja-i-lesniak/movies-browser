import { useSelector } from "react-redux";

import HeaderRating from "./HeaderRating";
import {
    TextWrapper,
    Wrapper,
    WrapperPoster,
    TitleHeader,
    MovieDetailsHeader
} from "./styled";
import { selectMovieData } from "../movieDetailsSlice";

export const Header = () => {
    const movieData = useSelector(selectMovieData);

    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "original";
    const poster = `${imageURL}${size}${movieData.backdrop_path}`;
    const title = movieData.title;

    return (
        <MovieDetailsHeader>
            <WrapperPoster url={poster}>
                <Wrapper>
                    <TextWrapper>
                        <TitleHeader>{title}</TitleHeader>
                        <HeaderRating />
                    </TextWrapper>
                </Wrapper>
            </WrapperPoster>
        </MovieDetailsHeader>
    );
};