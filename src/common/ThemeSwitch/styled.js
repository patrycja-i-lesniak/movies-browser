import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    color: inherit;
    outline-offset: 8px;
    background: none;
`;

export const Text = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 12px;

    @media(max-width: ${({ themeLight}) => themeLight.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    display: flex;
    width: 48px;
    background: red;
    border: 1px solid;
    padding: 2px;
    border-radius: 12px;
`;

export const IconWrapper = styled.span`
    display: flex;
    background: currentColor;
    border-radius: 50%;
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: green;
`;