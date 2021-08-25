import { useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import {
    selectPersonCredits
} from "../../PopularPeople/PersonDetails/personDetailsSlice";

import { selectGenres } from "../../../core/App/moviesBrowserSlice";
import noMoviePhoto from "../../../features/Images/noMoviePhoto.svg";
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
import { toMovie } from "../../../core/App/routes";
import { selectMoviesData } from "../../PopularMovies/moviesSlice";
import { ShowMoreButton } from "../ShowMoreButton";

const MovieTiles = ({ title }) => {
    const popularMoviesData = useSelector(selectMoviesData);

    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "w342";
    const poster = `${imageURL}${size}`;
    const [showMore, setShowMore] = useState(false);
    
    let moviesList;
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
                                to={toMovie({ id })}
                            >
                                <Picture
                                    src={
                                        poster_path
                                            ? `${poster}${poster_path}`
                                            : noMoviePhoto
                                    }
                                    alt={`${sectionName} poster`}
                                />
                                <ContentContainer>
                                    <div>
                                        <TileTitle>{title}</TileTitle>

                                        {release_date && (
                                            <Year>
                                                {character
                                                    ? `${character}
                                            (
                                                ${release_date
                                                        ? release_date.slice(0, 4)
                                                        : ""}
                                            )`
                                                    : job
                                                        ? `${job}(
                                                            ${release_date
                                                            ? release_date.slice(0, 4)
                                                            : ""}
                                                            )`
                                                        : release_date
                                                            ? release_date.slice(0, 4)
                                                            : ""
                                                }
                                            </Year>
                                        )}
                                        <Tags>
                                            {genre_ids.map(genreID =>
                                                <Tag key={nanoid()}>
                                                    {
                                                        moviesGenres.find(({ id }) =>
                                                            id === genreID).name
                                                    }
                                                </Tag>
                                            )}
                                        </Tags>
                                    </div>
                                    <Rate
                                        mobile={true}
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
                <ShowMoreButton 
                showMore={showMore}
                setShowMore={setShowMore}
                />
            }
        </>
        : ""
    );
};

export default MovieTiles;