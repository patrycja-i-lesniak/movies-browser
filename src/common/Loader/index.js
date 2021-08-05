import { Header, LoadingIcon, LoadingIconCircle, Wrapper } from "./styled";

const Loader = () => {
    const search = "Mulan" //template, waitng for search code and logic

    return (
        <Wrapper>
            <Header>Search results for "{search}"</Header>
            <LoadingIconCircle><LoadingIcon /></LoadingIconCircle>
        </Wrapper>
    );
};

export default Loader;