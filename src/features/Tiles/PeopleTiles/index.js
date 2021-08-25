import { useState } from "react";
import { useSelector } from "react-redux";

import noPersonPhoto from "../Images/noPersonPhoto.svg";
import {
    PeopleList,
    PersonTile,
    ProfilePicture,
    Role,
    TileTitle,
    Title
} from "./styled";
import { selectPopularPeopleData } from "../../PopularPeople/popularPeopleSlice";
import { selectMovieCredits } from "../../PopularMovies/MovieDetails/movieDetailsSlice";
import {ShowMoreButton} from "../../Tiles/ShowMoreButton";

const PeopleTiles = ({ title }) => {
    const popularPeopleData = useSelector(selectPopularPeopleData);
    const creditsData = useSelector(selectMovieCredits);
    const [showMore, setShowMore] = useState(false);

    let peopleList;
    const sectionName = title.toLowerCase();
    const imageURL = "http://image.tmdb.org/t/p/";
    const size = "w185";
    const poster = `${imageURL}${size}`;

    switch (sectionName) {
        case "cast":
            peopleList = creditsData.cast;
            break;

        case "crew":
            peopleList = creditsData.crew;
            break;

        default:
            peopleList = popularPeopleData.results;
    }

    return (
        <>
            <section>
                <Title>{title}</Title>
                <PeopleList>
                    {peopleList.map(({ id, profile_path, name, character, job }, index) =>
                        <li
                            key={index}
                            hidden={
                                !sectionName.includes("popular") &&
                                !showMore &&
                                index > 5
                            }>
                            <PersonTile
                                to={`/profile/${id}`}
                            >
                                <ProfilePicture
                                    src={profile_path ? `${poster}${profile_path}` : noPersonPhoto} alt={`${title} poster`}/>
                                <TileTitle>{name}</TileTitle>
                                {
                                    !sectionName.includes("popular") &&
                                    <Role>
                                        {character || job}
                                    </Role>
                                }
                            </PersonTile>
                        </li>
                    )}
                </PeopleList>
            </section>
            {
                !sectionName.includes("popular") && 
                <ShowMoreButton
                showMore={showMore}
                setShowMore={setShowMore}
                />
            }
        </>
    );
};

export default PeopleTiles;