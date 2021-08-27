import { useState, useEffect } from "react";
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

    const [mQuery, setMQuery] = useState({
        matches: window.innerWidth > 1280 ? true : false
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1280px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);
      }, [mQuery]);

      let size;

      if (mQuery.matches) {
        size = configuration.images.backdrop_sizes[3];
      } else {
        size = configuration.images.backdrop_sizes[2];
      }

    const imageURL = configuration.images.base_url;
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