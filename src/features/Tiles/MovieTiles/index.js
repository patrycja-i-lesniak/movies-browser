import { useSelector } from "react-redux";
import { selectPopularMoviesData } from "../../MovieList/popularMoviesSlice";

import pictureSubstitution from "../pictureSubstitution.svg";
import {
    SiteTitle,
    List,
    Tile,
    Picture,
    TileTitle,
    Year,
    Tags,
    Tag,
    ContentContainer,
} from "./styled";
import { Rate } from "../../Rate";

const MovieTiles = ({ title, movieData, moviesGenresData }) => {
    const popularMoviesData = useSelector(selectPopularMoviesData);
    const moviesGenres = moviesGenresData.genres;
    console.log(moviesGenres);

    const moviesList = popularMoviesData.results;
    console.log(popularMoviesData);

    return (
        <>
            <SiteTitle>{title}</SiteTitle>
            <List>
                {moviesList.map((movie, index) =>
                    <li key={index}>
                        <Tile
                            to={`/movie/${movie.id}`}
                        >
                            <Picture
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                    : pictureSubstitution
                                }
                                alt={`${title} poster`}
                            />
                            <ContentContainer>
                                <TileTitle>{movie.title}</TileTitle>
                                {movie.release_date && (
                                    <Year>
                                        {movie.release_date.slice(0, 4)}
                                    </Year>
                                )}

                                <Tags>
                                    {moviesList[index].genre_ids.map(movie => <Tag key={`genres-${movie}`}>{movie === moviesGenres[0].id ? moviesGenres[0].name : ""}</Tag>)}
                                </Tags>
                                <Rate
                                    small={true}
                                    vote_average={movie.vote_average}
                                    vote_count={movie.vote_count} />
                            </ContentContainer>
                        </Tile>
                    </li>
                )}
            </List>
        </>
    );
};

export default MovieTiles;