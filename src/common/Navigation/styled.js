import styled from "styled-components";
import searchIcon from "./searchIcon.svg";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.div`
    background: ${({ theme }) => theme.colors.navigation.background};
    color: ${({ theme }) => theme.colors.navigation.elems};
    min-height: 94px;
`;

export const NavigationContainer = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    min-height: inherit;
`;

export const DoubleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: inherit;
    padding: 0 10px;
    justify-content: space-between;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        justify-content: center;
}
`;

export const HeaderContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    min-height: inherit;
    min-height: 54px;
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

export const VideoIcon = styled.img`
    color: ${({ theme }) => theme.colors.navigation.elems};
    width: 34px;
    margin-right: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        width: 26px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
        width: 14px;
    }
`;

export const Title = styled.h1`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.navigation.elems};
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
        font-size: 14px;
    }
`;

export const NavigationLinks = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    text-decoration: none;
    color: white;
`;

export const NavigationItems = styled.li``;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.navigation.elems};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.navigation.elems};
        border-radius: 24px;
    }

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.navigation.elems};
        border-radius: 24px;
        background-color: ${({ theme }) => theme.colors.navigation.elems};
        color: ${({ theme }) => theme.colors.navigation.background};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: inherit;
    padding: 0 10px;
    flex-wrap: wrap;
    min-height: 74px;
`;

export const SearchBox = styled.form`
    position: relative;
`;

export const SearchIcon = styled.button`
    position: absolute;
    left: 24px;
    top: 25%;
    width: 24px;
    height: 24px;
    background-size: 24px;
    background-image: url(${searchIcon});
    background-color: transparent;
    border: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        background-size: 16px;
        width: 16px;
        width: 16px;
        left: 16px;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const SearchInput = styled.input`
    width: 432px;
    max-width: 90vw;
    height: 48px;
    border: none;
    border-radius: 33px;
    padding: 0;
    padding-left: 64px;
    background-color: ${({ theme }) => theme.colors.navigation.elems};
    outline: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        padding-left: 44px;
    }
`;



