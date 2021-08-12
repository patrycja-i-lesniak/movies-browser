import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    color: ${({theme}) => theme.colors.pagination.primaryText};
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    align-items: center;
    width: fit-content;
    margin: 46px auto 108px;
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
    color: ${({theme}) => theme.colors.pagination.primaryText};
    background: ${({theme}) => theme.colors.pagination.background};
    border-radius: 5px;
    padding: 8px 16px;

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        cursor: default;
        background-color: ${({theme}) => theme.colors.pagination.backgroundDisabled};
    `}
`;

export const Caption = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => theme.colors.pagination.caption};

    ${({ semibold }) => semibold && css`
        font-weight: 600;
        color: inherit;
    `}
`;

export const CaptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 8px;
`;