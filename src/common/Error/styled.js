import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 630px;
    text-align: center;
    padding: 14px;
`;

export const Title = styled.h1`
    margin: 24px 0;
    font-size: 36px;
    line-height: 43px;
`;

export const Subtitle = styled.h2`
    margin: 0 auto;
    max-width: 450px;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
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
`;