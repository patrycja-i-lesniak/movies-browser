import { useSelector } from "react-redux";
import { selectPopularMoviesData } from "../../features/MovieList/popularMoviesSlice";
import { selectPopularPeopleData } from "../../features/PersonList/popularPeopleSlice";
import { PaginationArrow } from "./PaginationArrow";
import { Caption, CaptionsWrapper, LinkText, PaginationLinks, StyledLink, Wrapper } from "./styled";

export const Pagination = ({ pathName }) => {
    const APIData = useSelector(pathName === "/people" ? selectPopularPeopleData : selectPopularMoviesData);

    const currentPage = APIData.page;
    const totalPages = APIData.total_pages;

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={currentPage === 1}
                        to={`${pathName}?page=1`}
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
                        to={`${pathName}?page=${currentPage - 1}`}
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
                        to={`${pathName}?page=${currentPage + 1}`}
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
                        to={`${pathName}?page=${totalPages}`}
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