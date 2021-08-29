import { NoResultsHeader, NoResultsImage, } from "./styled";
import { Wrapper } from "../styledCommonComponents/LoaderNoResultsWrapper";
import { useQueryParameter } from "../useQueryParameter";
import { searchQueryParamName } from "../queryParamNames";

export const NoResults = () => {
    const search = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <NoResultsHeader>Sorry, there are no results for "{search}"</NoResultsHeader>
            <NoResultsImage />
        </Wrapper>
    );
};