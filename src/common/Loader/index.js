import { Header, LoadingIcon } from "./styled";
import { Wrapper } from "../LoaderNoResultsWrapper";
import { useQueryParameter } from "../useQueryParameter";
import { searchQueryParamName } from "../queryParamNames";

export const Loader = () => {
    const search = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <Header>Search results for "{search}"</Header>
            <LoadingIcon />
        </Wrapper>
    );
};