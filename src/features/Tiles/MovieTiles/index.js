import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGenres, selectPopularMoviesData } from "../../PopularMovies/popularMoviesSlice";
import { selectPersonCredits } from "../../PopularPeople/PersonDetails/personDetailsSlice";

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
    ShowMoreButton,
} from "./styled";
import { Rate } from "../../Rate";
import { Arrow } from "../Arrow";

const MovieTiles = ({ title }) => {
    const popularMoviesData = useSelector(selectPopularMoviesData);

    const [showMore, setShowMore] = useState(false);

    let moviesList;
    const moviesGenresData = useSelector(selectGenres);
    const moviesGenres = moviesGenresData.genres;
    const sectionName = title.toLowerCase();
    const creditsData  = useSelector(selectPersonCredits);

    switch (sectionName) {
        case "cast":
            moviesList = creditsData.cast;
            break;

        case "crew":
            moviesList = creditsData.crew;
            break;

        default:
            moviesList = popularMoviesData.results;
    }


    return (
        <>
        <section> 
            <SiteTitle>{title}</SiteTitle>
            <List>
                {moviesList.map((movie, index) =>
                    <li key={index}
                    hidden={
                        !sectionName.includes("{cast, crew}") &&
                        !showMore &&
                        index > 5
                    }>
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
            </section>
            {
                !sectionName.includes("{cast, crew}") &&
                <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                    <span>
                        {showMore ? "Show less" : "Show more"}
                    </span>
                    <Arrow showMore={showMore} />
                </ShowMoreButton>
            }
        </>
    );
};

export default MovieTiles;