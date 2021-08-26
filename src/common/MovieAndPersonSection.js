import styled, { css } from "styled-components";

export const StyledSection = styled.section`
     margin: 32px 16px;

${({ movie }) => movie && css`
    margin: 64px 16px;
`};

${({ person }) => person && css`
    margin: 56px 16px;
`};

@media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
margin: 16px 16px;
};
`;