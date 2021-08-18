import {
    NavigationWrapper,
    NavigationContainer,
    DoubleContainer,
    HeaderContainer,
    Logo,
    VideoIcon,
    Title,
    NavigationLinks,
    NavigationItems,
    StyledNavLink,
    SearchContainer,
    SearchBox,
    SearchIcon,
    SearchInput,
} from "./styled";
import videoIcon from "./videoIcon.svg";

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationContainer>
                <DoubleContainer>
                    <HeaderContainer>
                        <Logo to="/movies">
                            <VideoIcon src={videoIcon} />
                            <Title>Movie Browser</Title>
                        </Logo>
                        <NavigationLinks>
                            <NavigationItems>
                                <StyledNavLink to="/movies">Movie</StyledNavLink>
                            </NavigationItems>
                            <NavigationItems>
                                <StyledNavLink to="/people">People</StyledNavLink>
                            </NavigationItems>
                        </NavigationLinks>
                    </HeaderContainer>
                    <SearchContainer>
                        <SearchBox>
                            <SearchIcon />
                            <SearchInput placeholder="Search for movies" />
                        </SearchBox>
                    </SearchContainer>
                </DoubleContainer>
            </NavigationContainer>
        </NavigationWrapper>
    );
};