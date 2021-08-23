import { useSelector } from "react-redux";

import { selectMovieData } from "../../PopularMovies/MovieDetails/movieDetailsSlice";
import { Rating } from "../../Rating";
import {
    MovieDetailsTile,
    Image,
    Content,
    Title,
    Year,
    Details,
    MovieDetails,
    Label,
    MovieData,
    Tags,
    Tag,
    Description,
} from "./styled";
import noPhoto from "./noPhoto.svg";

export const BigMovieTile = () => {
    const movieData = useSelector(selectMovieData);

    const image = movieData.poster_path;
    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "original";
    const poster = `${imageURL}${size}${image}`;
    const title = movieData.title;
    const year = movieData.release_date.slice(0, 4);
    const production = movieData.production_countries;
    const releaseDate = movieData.release_date;
    const overview = movieData.overview;
    const genres = movieData.genres;

    return (
        <MovieDetailsTile>
            {movieData.poster_path
                ?
                <Image src={poster} alt="" />
                : { noPhoto }
            }
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <Details>
                    <MovieDetails>
                        <Label>Production:</Label>
                        <MovieData>{production.map(country => <span key={`production-${country.name}`}>{country.name}{", "}</span>)}</MovieData>
                    </MovieDetails>
                    <MovieDetails>
                        <Label>Release date:</Label>
                        <MovieData>{releaseDate}</MovieData>
                    </MovieDetails>
                </Details>
                <Tags>
                    {genres.map(tag => <Tag key={`genres-${tag.name}`}>{tag.name}</Tag>)}
                </Tags>
                <Rating />
            </Content>
            <Description>
                {overview}
            </Description>
        </MovieDetailsTile>
    );
};