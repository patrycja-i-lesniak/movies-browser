import { useState } from "react";
import { exampleConfiguration } from "./exampleConfiguration";
import pictureSubstitution from "./pictureSubstitution.svg";
import {
    PeopleList,
    PersonTile,
    ProfilePicture,
    Role,
    ShowMoreButton,
    TileTitle,
    Title
} from "./styled";
import { Arrow } from "./Arrow/index";

const PeopleTiles = ({ title, creditsData, popularPeopleData }) => {
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
                    {peopleList.map((person, index) =>
                        <li key={index}>
                            <PersonTile
                                to={`/profile/${person.id}`}
                                hidden={
                                    !sectionName.includes("popular") &&
                                    !showMore &&
                                    index > 5
                                }
                            >
                                <ProfilePicture
                                    src={person.profile_path ?
                                        `${pictureLinkBase}${person.profile_path}` :
                                        pictureSubstitution}
                                />
                                <TileTitle>{person.name}</TileTitle>
                                {
                                    !sectionName.includes("popular") &&
                                    <Role>
                                        {person.character || person.job}
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