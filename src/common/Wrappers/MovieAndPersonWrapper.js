import styled, {css} from "styled-components";

export const MovieAndPersonWrapper = styled.div`
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.site.backgroundWrapper};
    max-width: 1368px;

    ${({ movie }) => movie && css`
        margin: 64px 0;
    `};

    ${({ person }) => person && css`
        margin: 56px 0;
    `};

    @media ( max-width: ${({ theme }) => theme.breakpoints.xxlarge}px) {
    padding: 32px 16px;
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 16px;
    };
`;