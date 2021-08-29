import { useSelector } from "react-redux";
import { selectPersonData } from "../../PopularPeople/PersonDetails/personDetailsSlice";
import {
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
import noPersonPhoto from "../../../features/Images/noPersonPhoto.svg";
import { ShowMoreBiography } from "../ShowMoreButton";
import { selectConfiguration } from "../../../core/App/movieBrowserSlice";

const PersonTile = () => {
    const personData = useSelector(selectPersonData);
    const configuration = useSelector(selectConfiguration);
    const image = personData.profile_path;
    const imageURL = configuration.images.secure_base_url;
    const size = configuration.images.logo_sizes[4];
    const poster = `${imageURL}${size}${image}`;

    return (
            <PersonDetailsTile>
                <PersonPhoto
                    src={
                        personData.profile_path
                            ? poster
                            : noPersonPhoto
                    }
                    alt={`${personData.name} poster`}
                />
                <Content>
                    <PersonName>{personData.name}</PersonName>
                    <Details>
                        {personData.birthday &&
                            <PersonDetails>
                                <Label>Date of birth:</Label>
                                <PersonData>{personData.birthday}</PersonData>
                            </PersonDetails>
                        }
                        {personData.place_of_birth &&
                            <PersonDetails>
                                <Label>Place of birth:</Label>
                                <PersonData>
                                    {personData.place_of_birth}
                                </PersonData>
                            </PersonDetails>
                        }
                    </Details>
                </Content>
                <Biography>
                    <ShowMoreBiography biography={personData.biography} />
                </Biography>
            </PersonDetailsTile>
    );
};

export default PersonTile;