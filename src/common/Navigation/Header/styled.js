import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: 34px;
`;

export const PageTitle = styled.h1`
    color: ${({ theme }) => theme.colors.navigation.elems};
    font-weight: 500;
    line-height: 40px;
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-left: 16px;
`;


