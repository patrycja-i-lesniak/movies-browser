import styled from "styled-components";
import { ReactComponent as Loading } from "./icon-spinner.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1368px;
    margin: 0 auto;

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 24px 16px;
    };
`;

export const Header = styled.h1`
    align-self: flex-start;
    margin: 56px 56px 120px;
    font-size: 36px;
    line-height: 43px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 24px;
        font-weight: 500;
        margin: 36px 36px 24px;
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 14px;
        line-height: 18px;
        margin: 0 0 24px;
    };
`;

export const LoadingIcon = styled(Loading)`
color: ${({ theme }) => theme.colors.loader.elipse};
animation-name: rotate;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: linear;

@keyframes rotate {
    from{
        transform: rotate(0deg);
    };
    to{
        transform: rotate(360deg);
    };
};

@media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 61px;
        height: 61px;
    };

@media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
         width: 35px;
        height: 35px;
    };
`;