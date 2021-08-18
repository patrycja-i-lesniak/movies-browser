import { examplePopularPeople } from "../../features/Tiles/PeopleTiles/examplePopularPeople";
import { PaginationArrow } from "./PaginationArrow";
import searchQueryParamName from "./searchQueryParamName";
import { Caption, CaptionsWrapper, LinkText, PaginationLinks, StyledLink, Wrapper } from "./styled";
import { useQueryParameter } from "./useQueryParameter";

export const Pagination = () => {
    const currentPage = useQueryParameter(searchQueryParamName) || "1";
    // totalPages is to be changed after connecting with API
    const totalPages = examplePopularPeople.total_pages.toString();

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={currentPage === "1"}
                        to="/people?page=1"
                    >
                        <PaginationArrow disabled={currentPage === "1"} />
                        <PaginationArrow
                            extra
                            disabled={currentPage === "1"}
                        />
                        <LinkText>First</LinkText>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        smallStep
                        disabled={currentPage === "1"}
                        to={`/people?page=${currentPage - 1}`}
                    >
                        <PaginationArrow disabled={currentPage === "1"} />
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
                        to={`/people?page=${+currentPage + 1}`}
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
                        to={`/people?page=${totalPages}`}
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