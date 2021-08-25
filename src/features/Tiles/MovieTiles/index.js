import { useSelector } from "react-redux";
import { useState } from "react";
import { selectGenres, selectPopularMoviesData } from "../../PopularMovies/popularMoviesSlice";
import { selectPersonCredits } from "../../PopularPeople/PersonDetails/personDetailsSlice";

import noMoviePhoto from "../Images/noMoviePhoto.svg";
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
import { Arrow } from "../Arrow";
import { ShowMoreButton } from "../ShowMoreButton";

const MovieTiles = ({ title }) => {
    const popularMoviesData = useSelector(selectPopularMoviesData);

    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "w300";
    const poster = `${imageURL}${size}`;

    let moviesList;

    const [showMore, setShowMore] = useState(false);
    const moviesGenresData = useSelector(selectGenres);
    const moviesGenres = moviesGenresData.genres;
    const sectionName = title.toLowerCase();
    const creditsData = useSelector(selectPersonCredits);


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

    return (moviesList.length ?
        <>
            <section>
                {
                    sectionName.includes("popular")
                        ?
                        <SiteTitle>
                            {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                        </SiteTitle>
                        :
                        <SiteTitle>
                            {`Movie - ${sectionName} (${moviesList.length})`}
                        </SiteTitle>
                }
                <List>
                    {moviesList.map(({
                        id,
                        poster_path,
                        title,
                        release_date,
                        character,
                        job,
                        genre_ids,
                        vote_average,
                        vote_count,
                    }, index) =>
                        <li key={index}
                            hidden={
                                !sectionName.includes("popular") &&
                                !showMore &&
                                index > 3
                            }>
                            <Tile
                                to={`/movie/${id}`}
                            >
                                <Picture
                                    src={poster_path ? `${poster}${poster_path}` : noMoviePhoto} alt={`${sectionName} poster`} />
                                <ContentContainer>
                                    <div>
                                        <TileTitle>{title}</TileTitle>

                                        {release_date && (
                                            <Year>
                                                {character
                                                    ? `${character}
                                            (${release_date ? release_date.slice(0, 4) : ""
                                                    })`
                                                    : job
                                                        ? `${job}
                                            (${release_date ? release_date.slice(0, 4) : ""
                                                        })`
                                                        : release_date ? release_date.slice(0, 4) : ""
                                                }
                                            </Year>
                                        )}
                                        <Tags>
                                            {genre_ids.map(genreID =>
                                                <Tag key={`genres-${genreID}`}>
                                                    {moviesGenres.find(({ id }) => id === genreID).name}
                                                </Tag>
                                            )}
                                        </Tags>
                                    </div>
                                    <Rate small={true}
                                        vote_average={vote_average}
                                        vote_count={vote_count} />
                                </ContentContainer>
                            </Tile>
                        </li>
                    )}
                </List>
            </section>
            {
                !sectionName.includes("popular") &&
                <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                    <span>
                        {showMore ? "Show less" : "Show more"}
                    </span>
                    <Arrow showMore={showMore} />
                </ShowMoreButton>
            }
        </>
        : ""
    );
};

export default MovieTiles;