import { searchQueryParamName } from "../../queryParamNames";
import { useQueryParameter } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
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
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onSearchChange = ({ target }) => {
        replaceQueryParameter({
            key: "search",
            value: target.value.trim() !== "" ? target.value : undefined
        });
    };

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
                            <SearchInput onChange={onSearchChange} value={query || ""} placeholder="Search for movies" />
                        </SearchBox>
                    </SearchContainer>
                </DoubleContainer>
            </NavigationContainer>
        </NavigationWrapper>
    );
};