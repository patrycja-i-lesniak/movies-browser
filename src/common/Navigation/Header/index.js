import {
    Logo,
    Icon,
    PageTitle,
} from "./styled";
import videoIcon from "./videoIcon.svg";

export const Header = () => {

    return (
            <Logo>
                <Icon src={videoIcon} />
                <PageTitle>Movies Browser</PageTitle>
            </Logo>
    )
}