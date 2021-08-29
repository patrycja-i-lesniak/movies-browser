import styled, { css } from "styled-components";

export const Image = styled.svg`
    ${({ forward }) => forward && css`
        transform: rotate(180deg);
    `}

    ${({ extra }) => extra && css`
        display: none;

        @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
            display: inherit;
        }
    `}
`;

export const Path = styled.path`
    fill: ${({ theme }) => theme.colors.paginationArrow};

    ${({ disabled }) => disabled && css`
        fill: ${({ theme }) => theme.colors.textSecondary};
    `}
`;