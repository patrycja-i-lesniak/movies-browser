import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    margin: 195px auto 0;
    max-width: 630px;
    text-align: center;
    padding: 16px;
`;

export const DangerImage = styled.img`
    @media(max-width: ${({theme}) => theme.breakpoints.xsmall}px) {
        width: 100px;
    }
`;

export const Title = styled.h1`
    margin: 24px 0;
    font-size: 36px;
    line-height: 1.2;

    @media(max-width: ${({theme}) => theme.breakpoints.xsmall}px) {
        font-size: 20px;
        margin: 16px 0;
    }
`;

export const Subtitle = styled.h2`
    margin: 0 auto;
    max-width: 450px;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;

    @media(max-width: ${({theme}) => theme.breakpoints.xsmall}px) {
        font-size: 14px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    margin-top: 24px;
    padding: 16px 24px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;

    @media(max-width: ${({theme}) => theme.breakpoints.xsmall}px) {
        padding: 12px 16px;
        font-size: 12px;
    }
`;