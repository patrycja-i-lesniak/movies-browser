import { useState } from "react"; import { exampleConfiguration } from "./exampleConfiguration";
import { examplePopularPeople } from "./examplePopularPeople";
import { exampleCredits } from "./exampleCredits";
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

const PeopleTiles = ({ title }) => {
    const [showMore, setShowMore] = useState(false);

    let peopleList;
    const sectionName = title.toLowerCase();
    const pictureLinkBase = `${exampleConfiguration.images.base_url}w185`;

    switch (sectionName) {
        case "cast":
            peopleList = exampleCredits.cast;
            break;

        case "crew":
            peopleList = exampleCredits.crew;
            break;

        default:
            peopleList = examplePopularPeople.results;
    }

    return (
        <>
            <section>
                <Title>{title}</Title>
                <PeopleList>
                    {peopleList.map((person, index) =>
                        <PersonTile
                            key={index}
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