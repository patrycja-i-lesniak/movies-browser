// import poster from "../../Images/poster.png";
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


export const BigMovieTile = ({ movieData }) => {
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
            <Image src={poster} alt="" />
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <Details>
                    <MovieDetails>
                        <Label>Production:</Label>
                        <MovieData>{production.map(country=> <span key ={`production-${country.name}`}>{country.name}{", "}</span>)}</MovieData>
                    </MovieDetails>
                    <MovieDetails>
                        <Label>Release date:</Label>
                        <MovieData>{releaseDate}</MovieData>
                    </MovieDetails>
                </Details>
                <Tags>
                    {genres.map(tag => <Tag key={`genres-${tag.name}`}>{tag.name}</Tag>)}
                </Tags>
                <Rating movieData={movieData} />
            </Content>
            <Description>
                {overview}
            </Description>
        </MovieDetailsTile>
    );
};