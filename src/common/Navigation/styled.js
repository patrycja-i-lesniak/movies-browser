import styled from "styled-components";

export const NavigationContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.navigation.background};
    color: ${({ theme }) => theme.colors.navigation.elems};
    min-height: 94px;
    max-width: 1920px;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        min-height: 142px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
    margin: 0 auto;
    flex-basis: 50%;
    padding: 5px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    flex-basis: 50%;
    margin: 0 auto;
    padding: 0 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        flex-basis: 90vw;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        flex-basis: 70%;
    }
`;

export const SearchContainer = styled(HeaderContainer)`
    justify-content: flex-end;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        justify-content: center;
        flex-basis: 50%;
        margin-bottom: 10px;
    }
`;