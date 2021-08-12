import { examplePopularPeople } from "./examplePopularPeople";
import { PaginationArrow } from "./PaginationArrow";
import { Caption, CaptionsWrapper, LinkText, PaginationLinks, StyledLink, Wrapper } from "./styled";

export const Pagination = () => {
    const page = examplePopularPeople.page;
    const totalPages = examplePopularPeople.total_pages;
    // code above is to be changed after connecting with API

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <StyledLink
                        disabled={page === 1}
                        to={`/`}
                    >
                        <PaginationArrow disabled={page === 1} />
                        <PaginationArrow
                            extra
                            disabled={page === 1}

                        />
                        <LinkText>First</LinkText>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        smallstep="true"
                        disabled={page === 1}
                        to={`/`}
                    >
                        <PaginationArrow disabled={page === 1} />
                        <LinkText>Previous</LinkText>
                    </StyledLink>
                </li>
            </PaginationLinks>
            <CaptionsWrapper>
                <Caption>
                    Page
                </Caption>
                <Caption semibold>
                    {page}
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
                        smallstep="true"
                        disabled={page === totalPages}
                        to={`/`}
                    >
                        <LinkText>Next</LinkText>
                        <PaginationArrow
                            forward
                            disabled={page === totalPages}
                        />
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        disabled={page === totalPages}
                        to={`/`}
                    >
                        <LinkText>Last</LinkText>
                        <PaginationArrow
                            forward
                            disabled={page === totalPages}
                        />
                        <PaginationArrow
                            extra
                            forward
                            disabled={page === totalPages}
                        />
                    </StyledLink>
                </li>
            </PaginationLinks>
        </Wrapper>
    );
};