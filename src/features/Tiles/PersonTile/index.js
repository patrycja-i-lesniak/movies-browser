import { useSelector } from "react-redux";
import {selectPersonData} from "../../PopularPeople/PersonDetails/personDetailsSlice";
import {
    Wrapper,
    PersonDetailsTile,
    PersonPhoto,
    Content,
    PersonName,
    Details,
    Label,
    PersonDetails,
    PersonData,
    Biography,
} from "./styled";
import noPhoto from "./noPhoto.svg";

const PersonTile = () => {
    const personData = useSelector(selectPersonData);

    return (
        <Wrapper>
            <PersonDetailsTile
                to={`/profile/:id`}
            >
                {personData.profile_path
                ?
                <PersonPhoto src={`https://image.tmdb.org/t/p/w300${personData.profile_path}`} alt=""/>
                : {noPhoto}
                }
                <Content>
                    <PersonName>{personData.name}</PersonName>
                    <Details>
                        <PersonDetails>
                            <Label>Date of birth:</Label>
                            <PersonData>{personData.birthday}</PersonData>
                        </PersonDetails>
                        <PersonDetails>
                            <Label>Place of birth:</Label>
                            <PersonData>{personData.place_of_birth}</PersonData>
                        </PersonDetails>
                    </Details>
                </Content>
                <Biography>{personData.biography}</Biography>
            </PersonDetailsTile>
        </Wrapper>
    );
};

export default PersonTile;