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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    console.log(configuration);
    useEffect(() => {
        const getScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", getScreenWidth);

        return () => window.removeEventListener("resize", getScreenWidth);
    }, [screenWidth]);

    let size;

    if (screenWidth > 1280) size = configuration.images.backdrop_sizes[3];
    if (screenWidth > 780 && screenWidth < 1281) size = configuration.images.backdrop_sizes[2];
    if (screenWidth > 300 && screenWidth < 781) size = configuration.images.backdrop_sizes[1];
    if (screenWidth < 301) size = configuration.images.backdrop_sizes[0];

    const imageURL = configuration.images.secure_base_url;
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