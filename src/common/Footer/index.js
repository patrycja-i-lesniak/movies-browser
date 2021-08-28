import styled from "styled-components";

export const Footer = styled.footer`
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textHeader};
    font-weight: 400;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.navigation.background};
`;