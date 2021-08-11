import styled, { css } from "styled-components";

export const StyledArrow = styled.svg`
    ${({ turn }) => turn && css`
        transform: rotate(180deg);     
    `}
`;