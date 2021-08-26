import { useState } from "react";
import { useSelector } from "react-redux";

import noPersonPhoto from "../../../features/Images/noPersonPhoto.svg";
import {
    PeopleList,
    PersonTile,
    ProfilePicture,
    Role,
    TileTitle,
    Title
} from "./styled";
import { toProfile } from "../../../core/App/routes";
import { selectMovieCredits } from "../../PopularMovies/MovieDetails/movieDetailsSlice";
import { selectPeopleData, selectPeopleSearchQuery } from "../../PopularPeople/peopleSlice";
import { ShowMoreButton } from "../ShowMoreButton";
import { StyledSection } from "../../../common/MovieAndPersonSection";

const PeopleTiles = ({ title }) => {
    const peopleData = useSelector(selectPeopleData);
    const creditsData = useSelector(selectMovieCredits);
    const searchQuery = useSelector(selectPeopleSearchQuery);
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
            peopleList = peopleData.results;
    }

    return (
        <>
            <StyledSection>
                <Title>              
                    {
                        sectionName.includes("popular") && searchQuery  
                            ? `Search results for "${searchQuery}" (${peopleData.total_results})`
                            : title
                    }
                </Title>
                <PeopleList>
                    {peopleList.map(({
                        id,
                        profile_path,
                        name,
                        character,
                        job }, index) =>
                        <li
                            key={index}
                            hidden={
                                !sectionName.includes("popular") &&
                                !showMore &&
                                index > 5
                            }>
                            <PersonTile
                                to={toProfile({ id })}
                            >
                                <ProfilePicture
                                    src={
                                        profile_path
                                            ? `${poster}${profile_path}`
                                            : noPersonPhoto}
                                    alt={`${name} poster`}
                                />
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
            </StyledSection>
            {
                !sectionName.includes("popular") && peopleList.length > 5 &&
                <ShowMoreButton
                    showMore={showMore}
                    setShowMore={setShowMore}
                />
            }
        </>
    );
};

export default PeopleTiles;