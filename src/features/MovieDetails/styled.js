import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1920px;
    background: ${({ theme }) => theme.colors.site.backgroundWrapper};
    padding: 64px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 16px;
    };
`;