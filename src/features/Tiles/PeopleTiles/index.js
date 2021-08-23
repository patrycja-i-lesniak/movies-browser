import { useState } from "react";
import { useSelector } from "react-redux";

import { exampleConfiguration } from "../exampleConfiguration";
import pictureSubstitution from "../pictureSubstitution.svg";
import {
    PeopleList,
    PersonTile,
    ProfilePicture,
    Role,
    ShowMoreButton,
    TileTitle,
    Title
} from "./styled";
import { Arrow } from "../Arrow";

import { toProfile } from "../../../core/App/routes";
import { selectMovieCredits } from "../../PopularMovies/MovieDetails/movieDetailsSlice";
import { selectPopularPeopleData } from "../../PopularPeople/popularPeopleSlice";

const PeopleTiles = ({ title }) => {
    const popularPeopleData = useSelector(selectPopularPeopleData);
    const creditsData = useSelector(selectMovieCredits);

    const [showMore, setShowMore] = useState(false);

    let peopleList;
    const sectionName = title.toLowerCase();
    const pictureLinkBase = `${exampleConfiguration.images.base_url}w185`;

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
                                to={toProfile({ id: id })}
                            >
                                <ProfilePicture
                                    src={profile_path ?
                                        `${pictureLinkBase}${profile_path}` :
                                        pictureSubstitution}
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
    );
};

export default PeopleTiles;