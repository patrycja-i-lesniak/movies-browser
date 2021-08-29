import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: 400;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.backgroundBlack};
    height: 80px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;