import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.navigation.background};
    min-height: 94px;
    width: 100%;
`;

export const Navigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: 40px;
`;

export const PageTitle = styled.h1`
    color: ${({ theme }) => theme.colors.navigation.elems};
    font-weight: 500;
    line-height: 40px;
    font-size: 24px;
    letter-spacing: 1,5px;
    margin-left: 16px;
`;

export const NavigationLink = styled.h2`
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navigation.elems};

&:active {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 16px 24px;
}
`;
