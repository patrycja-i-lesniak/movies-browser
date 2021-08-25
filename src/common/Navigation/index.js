import { useLocation } from "react-router-dom";

import { toMovies, toPeople } from "../../core/App/routes";
import { searchQueryParamName } from "../queryParamNames";
import { useQueryParameter } from "../useQueryParameter";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
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
    const location = useLocation();

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onSearchChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined
        });
    };

    return (
        <NavigationWrapper>
            <NavigationContainer>
                <DoubleContainer>
                    <HeaderContainer>
                        <Logo to={toMovies()}>
                            <VideoIcon src={videoIcon} />
                            <Title>Movie Browser</Title>
                        </Logo>
                        <NavigationLinks>
                            <NavigationItems>
                                <StyledNavLink to={toMovies()}>Movie</StyledNavLink>
                            </NavigationItems>
                            <NavigationItems>
                                <StyledNavLink to={toPeople()}>People</StyledNavLink>
                            </NavigationItems>
                        </NavigationLinks>
                    </HeaderContainer>
                    <SearchContainer>
                        <SearchBox>
                            <SearchIcon />
                            <SearchInput
                                onChange={onSearchChange}
                                value={query || ""}
                                placeholder={
                                    `Search for ${location.pathname.includes("/movie")
                                        ? "movies"
                                        : "people"}`
                                }
                            />
                        </SearchBox>
                    </SearchContainer>
                </DoubleContainer>
            </NavigationContainer>
        </NavigationWrapper>
    );
};
