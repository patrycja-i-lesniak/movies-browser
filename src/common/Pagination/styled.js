import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
    color: ${({ theme }) => theme.colors.textPrimary};
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    align-items: center;
    width: fit-content;
    margin: 48px auto 28px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-gap: 6px;
        margin: 32px auto 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-gap: 8px;
        margin: 24px auto 8px;
    }
`;

export const PaginationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-gap: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-gap: 8px;
    }
`;

export const PaginationButton = styled.button`
    text-decoration: none;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.paginationPrimaryText};
    background: ${({ theme }) => theme.colors.paginationBackground};
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    border: none;

    :hover {
        cursor: pointer;
        opacity: 70%;
    }

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        cursor: default;
        background-color: ${({ theme }) => theme.colors.paginationBackgroundDisabled};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        padding: 8px 12px;
    }
`;

export const ButtonContentWrapper = styled.span`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 8px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-gap: 6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-gap: 4px;

        ${({ smallStep }) => smallStep && css`
            grid-template-columns: auto;
        `}
    }
`;

export const ButtonText = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        display: none;
    }
`;

export const CaptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-gap: 6px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-gap: 2px;
    }
`;

export const Caption = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};

    ${({ semibold }) => semibold && css`
        font-weight: 600;
        color: inherit;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 12px;
        line-height: 2;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 10px;
        line-height: 2.4;
    }
`;