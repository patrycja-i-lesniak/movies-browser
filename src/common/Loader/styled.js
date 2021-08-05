import styled from "styled-components";
import { ReactComponent as Loading } from "./icon-spinner.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
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
    font-style: normal;
    font-weight: 600;
    line-height: 43px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 24px;
        font-weight: 500;
        margin: 36px 36px 24px;
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        margin: 0 0 24px;
    };
`;

export const LoadingIconCircle = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 100%;
    border: 11,38px solid ${({ theme }) => theme.colors.loader.circle};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 61px;
        height: 61px;
        border: 6.38px solid ${({ theme }) => theme.colors.loader.circle};
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 35px;
        height: 35px;
        border: 4.38px solid ${({ theme }) => theme.colors.loader.circle};
    };
`;

export const LoadingIcon = styled(Loading)`
position: absolute;
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