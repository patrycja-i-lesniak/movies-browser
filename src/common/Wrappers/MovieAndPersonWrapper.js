import styled, {css} from "styled-components";

export const MovieAndPersonWrapper = styled.div`
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.site.backgroundWrapper};
    max-width: 1368px;
    padding: 0 16px;

    ${({ movie }) => movie && css`
        margin: 64px 0;
    `};

    ${({ person }) => person && css`
        margin: 56px 0;
    `};

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 16px;
    };
`;