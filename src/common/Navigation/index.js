import { Container, NavigationContainer, SearchContainer, HeaderContainer } from "./styled";
import { NavigationLink } from "./NavigationLink";
import { Header } from "./Header";
import { Search } from "./Search";
import { Wrapper } from "../Wrapper/";

export const Navigation = () => {

    return (
        <NavigationContainer>
            <Wrapper>
                <Container>
                    <HeaderContainer>
                        <Header />
                        <NavigationLink />
                    </HeaderContainer>
                    <SearchContainer>
                        <Search />
                    </SearchContainer>
                </Container>
            </Wrapper>
        </NavigationContainer>
    )
}