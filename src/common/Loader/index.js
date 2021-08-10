import { Header, LoadingIcon } from "./styled";
import { Wrapper } from "../LoaderNoResultsWrapper";

const Loader = () => {
    const search = "Mulan" //template, waitng for search code and logic

    return (
        <Wrapper>
            <Header>Search results for "{search}"</Header>
            <LoadingIcon />
        </Wrapper>
    );
};

export default Loader;