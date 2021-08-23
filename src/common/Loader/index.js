import { Header, LoadingIcon } from "./styled";
import { Wrapper } from "../LoaderNoResultsWrapper";
import { useQueryParameter } from "../useQueryParameter";
import { searchQueryParamName } from "../queryParamNames";

export const Loader = () => {
    const searchQuery = useQueryParameter(searchQueryParamName);
    const headerText = searchQuery
        ? `Search results for "${searchQuery}"`
        : "";

    return (
        <Wrapper>
            <Header>{headerText}</Header>
            <LoadingIcon />
        </Wrapper>
    );
};