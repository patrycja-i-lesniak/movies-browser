import { useSelector } from "react-redux";
import { selectGenres, selectPopularMoviesData } from "../../PopularMovies/popularMoviesSlice";

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

const MovieTiles = ({ title, person = false }) => {
    const popularMoviesData = useSelector(selectPopularMoviesData);
    const moviesList = popularMoviesData.results;
    const moviesGenresData = useSelector(selectGenres);
    const moviesGenres = moviesGenresData.genres;

    return (
        <>
            <SiteTitle>{title}</SiteTitle>
            <List person={person}>
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
                                    {movie.genre_ids.map(genreID =>
                                        <Tag key={`genres-${genreID}`}>
                                            {moviesGenres.find(({ id }) => id === genreID).name}
                                        </Tag>
                                    )}
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