import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.site.backgroundWrapper};
    padding: 64px 0;
    max-width: 1368px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.xxlarge}px) {
    padding: 32px 16px;
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 16px;
    };
`;