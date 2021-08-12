import { examplePopularPeople } from "./examplePopularPeople";
import { PaginationArrow } from "./PaginationArrow";
import { Caption, CaptionsWrapper, PaginationLinks, StyledLink, Wrapper } from "./styled";

export const Pagination = () => {
    const page = examplePopularPeople.page;
    const totalPages = examplePopularPeople.total_pages;

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={page === 1}
                        to={`/movies/1`}
                    >
                        <PaginationArrow disabled={page === 1} />
                        First
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        disabled={page === 1}
                        to={`/movies/${page - 1}`}
                    >
                        <PaginationArrow disabled={page === 1} />
                        Previous
                    </StyledLink>
                </li>
            </PaginationLinks>
            <CaptionsWrapper>
                <Caption>Page</Caption>
                <Caption semibold>{page}</Caption>
                <Caption>of</Caption>
                <Caption semibold>{totalPages}</Caption>
            </CaptionsWrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={page === totalPages}
                        to={`/movies/${page + 1}`}
                    >
                        Next
                        <PaginationArrow forward disabled={page === totalPages} />
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        disabled={page === totalPages}
                        to={`/movies/${totalPages}`}
                    >
                        Last
                        <PaginationArrow forward disabled={page === totalPages} />
                    </StyledLink>
                </li>
            </PaginationLinks>
        </Wrapper>
    );
};