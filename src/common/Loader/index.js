import { Header, LoadingIcon } from "./styled";
import { useQueryParameter } from "../useQueryParameter";
import { searchQueryParamName } from "../queryParamNames";
import { Wrapper } from "../Wrappers/LoaderNoResultsWrapper";

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