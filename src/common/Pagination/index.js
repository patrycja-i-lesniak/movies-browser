import { useSelector } from "react-redux";

import { selectPopularMoviesData } from "../../features/MovieList/popularMoviesSlice";
import { selectPopularPeopleData } from "../../features/PersonList/popularPeopleSlice";
import {
    paginationQueryParamName,
    searchQueryParamName
} from "../../queryParamNames";
import { useQueryParameter } from "../useQueryParameter";
import { PaginationArrow } from "./PaginationArrow";
import {
    Caption,
    CaptionsWrapper,
    LinkText,
    PaginationLinks,
    StyledLink,
    Wrapper
} from "./styled";

export const Pagination = ({ pathName }) => {
    const searchQuery = useQueryParameter(searchQueryParamName);
    const APIData = useSelector(
        pathName === "/people"
            ? selectPopularPeopleData
            : selectPopularMoviesData
    );

    const baseURL = `${pathName}?${paginationQueryParamName}=`;
    const currentPage = APIData.page;
    const totalPages = APIData.total_pages;

    const searchURL = searchQuery ? `&${searchQueryParamName}=${searchQuery}` : "";

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={currentPage === 1}
                        to={`${baseURL}1${searchURL}`}
                    >
                        <PaginationArrow disabled={currentPage === 1} />
                        <PaginationArrow
                            extra
                            disabled={currentPage === 1}
                        />
                        <LinkText>First</LinkText>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        smallStep
                        disabled={currentPage === 1}
                        to={`${baseURL}${currentPage - 1}${searchURL}`}
                    >
                        <PaginationArrow disabled={currentPage === 1} />
                        <LinkText>Previous</LinkText>
                    </StyledLink>
                </li>
            </PaginationLinks>
            <CaptionsWrapper>
                <Caption>
                    Page
                </Caption>
                <Caption semibold>
                    {currentPage}
                </Caption>
                <Caption>
                    of
                </Caption>
                <Caption semibold>
                    {totalPages}
                </Caption>
            </CaptionsWrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        smallStep
                        disabled={currentPage === totalPages}
                        to={`${baseURL}${currentPage + 1}${searchURL}`}
                    >
                        <LinkText>Next</LinkText>
                        <PaginationArrow
                            forward
                            disabled={currentPage === totalPages}
                        />
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        disabled={currentPage === totalPages}
                        to={`${baseURL}${totalPages}${searchURL}`}
                    >
                        <LinkText>Last</LinkText>
                        <PaginationArrow
                            forward
                            disabled={currentPage === totalPages}
                        />
                        <PaginationArrow
                            extra
                            forward
                            disabled={currentPage === totalPages}
                        />
                    </StyledLink>
                </li>
            </PaginationLinks>
        </Wrapper>
    );
};