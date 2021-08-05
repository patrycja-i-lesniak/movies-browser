import { NoResultsHeader, NoResultsImage, NoResultsWrapper } from "./styled";

const NoResults = () => {
    const search = "Muan" //template, waitng for search code and logic

    return (
        <NoResultsWrapper>
            <NoResultsHeader>Sorry, there are no results for "{search}"</NoResultsHeader>
            <NoResultsImage />
        </NoResultsWrapper>
    );
};

export default NoResults;