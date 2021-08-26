import { useSelector } from "react-redux";
import { selectMovieData } from "../movieDetailsSlice";

import HeaderRating from "./HeaderRating";
import {
    TextWrapper,
    Wrapper,
    WrapperPoster,
    TitleHeader,
    MovieDetailsHeader
} from "./styled";


export const Header = () => {
    const movieData = useSelector(selectMovieData);

    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "original";
    const poster = movieData.backdrop_path;
    const posterAdress = `${imageURL}${size}${poster}`;
    const title = movieData.title;

    return (
        poster && (
            <MovieDetailsHeader>
                <WrapperPoster url={posterAdress}>
                    <Wrapper>
                        <TextWrapper>
                            <TitleHeader>{title}</TitleHeader>
                            <HeaderRating />
                        </TextWrapper>
                    </Wrapper>
                </WrapperPoster>
            </MovieDetailsHeader>
        )
    );
};