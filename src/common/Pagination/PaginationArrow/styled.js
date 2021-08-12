import styled, { css } from "styled-components";

export const Image = styled.svg`
    ${({forward}) => forward && css`
        transform: rotate(180deg);
    `}
`;