import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textHeader};
    font-weight: 400;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.navigation.background};
`;