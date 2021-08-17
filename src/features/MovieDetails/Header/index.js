import { TextWrapper, Wrapper, WrapperPoster, TitleHeader, MovieDetailsHeader } from "./styled";
import HeaderRating from "./HeaderRating";

export const Header = ({ movieData }) => {
    const image = movieData.backdrop_path;
    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "original";
    const poster = `${imageURL}${size}${image}`;
    const title = movieData.title;

    return (
        <MovieDetailsHeader>
            <WrapperPoster style={{
                backgroundImage: `url("${poster}")`
            }}>
                <Wrapper>
                    <TextWrapper>
                        <TitleHeader>{title}</TitleHeader>
                        <HeaderRating movieData={movieData} />
                    </TextWrapper>
                </Wrapper>
            </WrapperPoster>
        </MovieDetailsHeader>
    );
};