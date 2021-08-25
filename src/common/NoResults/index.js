import { NoResultsHeader, NoResultsImage, } from "./styled";
import { Wrapper } from "../Wrappers/LoaderNoResultsWrapper";

export const NoResults = () => {
    const search = "Muan"; //template, waitng for search code and logic

    return (
        <Wrapper>
            <NoResultsHeader>Sorry, there are no results for "{search}"</NoResultsHeader>
            <NoResultsImage />
        </Wrapper>
    );
};