import styled from "styled-components";
import poster from "./poster.png";

export const WrapperPoster = styled.div`
margin: 0 auto;
    /* display:flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center; */
    /* width: 100%; */
    max-width: 1920px;
    width: 100vw;
    max-height: 769px;
    height: 40vw;
    background-image: url("${poster}");
    background-repeat: no-repeat;
    background-position: center;;

    /* @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 262px;
        height: 148px;
    }; */
`;

export const Wrapper = styled.div`
    max-width: 1920px;
    width: 100vw;
    max-height: 769px;
    height: 40vw;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(270deg, #000000 14.11%,
                    rgba(0, 0, 0, 0.873268) 15.08%,
                    rgba(0, 0, 0, 0.720529) 16.51%,
                    rgba(0, 0, 0, 0.294577) 19.99%,
                    rgba(0, 0, 0, 0.159921) 21.88%,
                    rgba(0, 0, 0, 0) 25.68%),
                linear-gradient(90deg, #000000 13.6%,
                    rgba(0, 0, 0, 0.984059) 14.58%,
                    rgba(0, 0, 0, 0.967732) 15.44%,
                    rgba(0, 0, 0, 0.865569) 16.3%,
                    rgba(0, 0, 0, 0.230315) 22.87%,
                    rgba(0, 0, 0, 0) 26.64%),
                linear-gradient(180deg, #000000 0%,
                    rgba(0, 0, 0, 0.689555) 4.66%,
                    rgba(0, 0, 0, 0.439033) 9.34%,
                    rgba(0, 0, 0, 0.20628) 15.16%,
                    rgba(0, 0, 0, 0) 24.22%),
                linear-gradient(189.44deg,
                    rgba(0, 0, 0, 0) 58.48%,
                    rgba(0, 0, 0, 0.106473) 63.17%,
                    rgba(0, 0, 0, 0.235359) 68.85%,
                    rgba(0, 0, 0, 0.492821) 78.08%,
                    rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);

    /* @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 262px;
        height: 148px;
    }; */
`;

export const TextWrapper= styled.article`
    max-width: 1368px;
    width: 100vw;
    flex-direction: column;
    align-self: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.textHeader};
`;

export const TitleHeader = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin-bottom: 24.98px;
`;