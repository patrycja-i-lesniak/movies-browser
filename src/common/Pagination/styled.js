import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    color: #18181B;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    align-items: center;
    width: fit-content;
    margin: 0 auto 108px;
`;

export const PaginationLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 12px;
`;

export const StyledLink = styled(Link)`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 8px;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    line-height: 1.4;
    color: black;
    background: #D6E4FF;
    border-radius: 5px;
    padding: 8px 16px;

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        cursor: default;
        background-color: #E4E6F0;
    `}
`;

export const Caption = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: #7E839A;

    ${({ semibold }) => semibold && css`
        font-weight: 600;
        color: #18181B;
    `}
`;

export const CaptionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 8px;
`;