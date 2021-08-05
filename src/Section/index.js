import { exampleConfiguration } from "./exampleConfiguration";
import { examplePopularPeople } from "./examplePopularPeople";
import { exampleCredits } from "./exampleCredits";
import pictureSubstitution from "./pictureSubstitution.svg";
import { PeopleList, PersonTile, ProfilePicture, Role, SectionWrapper, TileTitle } from "./styled";

const Section = ({ title }) => {
    let peopleList;
    const sectionName = title.toLowerCase();

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
        <SectionWrapper>
            <h1>{title}</h1>
            <PeopleList>
                {peopleList.map((person, index) =>
                    <PersonTile key={index}>

                        <ProfilePicture
                            src={person.profile_path ?
                                `https://image.tmdb.org/t/p/w185/${person.profile_path}` :
                                pictureSubstitution}
                        />

                        <TileTitle>{person.name}</TileTitle>

                        {
                            !person.known_for &&
                            <Role>
                                {person.character || person.job}
                            </Role>
                        }

                    </PersonTile>
                )}
            </PeopleList>
        </SectionWrapper>
    );
};

export default Section;