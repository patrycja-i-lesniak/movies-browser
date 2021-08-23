import { useSelector } from "react-redux";
import { selectGenres, selectMoviesData } from "../../MovieList/moviesSlice";

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

const MovieTiles = ({ title }) => {
    const popularMoviesData = useSelector(selectMoviesData);
    const moviesList = popularMoviesData.results;
    const moviesGenresData = useSelector(selectGenres);
    const moviesGenres = moviesGenresData.genres;

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
                                    {moviesList[index].genre_ids.map(movie => <Tag key={`genres-${movie}`}>{moviesGenres.find(({ id }) => id === movie).name}</Tag>)}
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