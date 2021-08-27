import { useSelector } from "react-redux";
import { selectConfiguration } from "../../../../core/App/movieBrowserSlice";
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
    const configuration = useSelector(selectConfiguration);

    const imageURL = configuration.images.base_url;
    const size = configuration.images.backdrop_sizes[3];
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