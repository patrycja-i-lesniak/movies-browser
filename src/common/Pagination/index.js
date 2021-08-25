import { useSelector } from "react-redux";

import { selectMoviesData } from "../../features/PopularMovies/moviesSlice";
import { selectPopularPeopleData } from "../../features/PopularPeople/popularPeopleSlice";
import { paginationQueryParamName } from "../queryParamNames";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
import { PaginationArrow } from "./PaginationArrow";
import {
    Caption,
    CaptionsWrapper,
    LinkText,
    PaginationLinks,
    PaginationButton,
    Wrapper
} from "./styled";


export const Pagination = ({ pathName }) => {
    const APIData = useSelector(
        pathName === "/people"
            ? selectPopularPeopleData
            : selectMoviesData
    );
    const replaceQueryParameter = useReplaceQueryParameter();

    const currentPage = APIData.page;
    const totalPages = APIData.total_pages;

    return (
        <Wrapper>
            <PaginationLinks>
                <li>
                    <PaginationButton
                        disabled={currentPage === 1}
                        onClick={() => replaceQueryParameter({
                            key: paginationQueryParamName,
                            value: 1,
                        })}
                    >
                        <PaginationArrow disabled={currentPage === 1} />
                        <PaginationArrow
                            extra
                            disabled={currentPage === 1}
                        />
                        <LinkText>First</LinkText>
                    </PaginationButton>
                </li>
                <li>
                    <PaginationButton
                        smallStep
                        disabled={currentPage === 1}
                        onClick={() => replaceQueryParameter({
                            key: paginationQueryParamName,
                            value: currentPage - 1,
                        })}
                    >
                        <PaginationArrow disabled={currentPage === 1} />
                        <LinkText>Previous</LinkText>
                    </PaginationButton>
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
                    <PaginationButton
                        smallStep
                        disabled={currentPage === totalPages}
                        onClick={() => replaceQueryParameter({
                            key: paginationQueryParamName,
                            value: currentPage + 1,
                        })}
                    >
                        <LinkText>Next</LinkText>
                        <PaginationArrow
                            forward
                            disabled={currentPage === totalPages}
                        />
                    </PaginationButton>
                </li>
                <li>
                    <PaginationButton
                        disabled={currentPage === totalPages}
                        onClick={() => replaceQueryParameter({
                            key: paginationQueryParamName,
                            value: totalPages,
                        })}
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
                    </PaginationButton>
                </li>
            </PaginationLinks>
        </Wrapper>
    );
};