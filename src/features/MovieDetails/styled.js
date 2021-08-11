import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.site.backgroundWrapper};
    padding: 64px;
    max-width: 1368px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 16px;
    };
`;