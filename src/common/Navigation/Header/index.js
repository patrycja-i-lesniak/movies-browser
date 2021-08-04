import {
    Container,
    Navigation,
    Logo,
    Icon,
    PageTitle,
    NavigationLink,
} from "./styled";
import { Search } from "./Search";
import { Wrapper } from "../Wrapper";
import videoIcon from "./videoIcon.svg";

export const Header = () => {

    return (
        <Container>
            <Wrapper>
                <Navigation>
                    <Logo>
                        <Icon src={videoIcon} />
                        <PageTitle>Movies Browser</PageTitle>
                    </Logo>
                    <NavigationLink>Movies</NavigationLink>
                    <NavigationLink>People</NavigationLink>
                    <Search></Search>
                </Navigation>
            </Wrapper>
        </Container>
    )
}