import { useState } from "react";
import { Arrow } from "../Arrow";
import pictureSubstitution from "../pictureSubstitution.svg";
import {
    SiteTitle,
    List,
    Tile,
    Picture,
    TileTitle,
    Year,
    ShowMoreButton,
    Tags,
    Tag,
} from "./styled";



const MovieTiles = ({ title, popularMoviesData, movieData }) => {
    const [showMore, setShowMore] = useState(false);
    const moviesList = popularMoviesData.results;
    const genres = movieData.genres;



    return (
        <>
            <section>
                <SiteTitle>{title}</SiteTitle>
                <List>
                    {moviesList.map((movie, index) =>
                        <li key={index}>
                            <Tile
                                to={`/movie/${movie.id}`}
                                hidden={
                                    !showMore &&
                                    index > 3
                                }
                            >
                                <Picture
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                                        : pictureSubstitution
                                    }
                                    alt={`${title} poster`}
                                />

                                <TileTitle>{movie.title}</TileTitle>
                                <Year>
                                    {movie.release_date.slice(0, 4)}
                                </Year>
                                <Tags>
                                {genres.map(tag => <Tag key={`genres-${tag.name}`}>{tag.name}</Tag>)}
                                </Tags>
                            </Tile>
                        </li>
                    )}
                </List>
            </section>
            {
                !moviesList.includes("popular") &&
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