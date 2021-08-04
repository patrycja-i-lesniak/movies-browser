import styled from "styled-components";

export const Link = styled.h2`
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navigation.elems};
    padding: 20px;

&:active {
    border: 1px solid ${({ theme }) => theme.colors.navigation.elems};
    box-sizing: border-box;
    border-radius: 24px;
    padding: 16px 24px;
}
`;