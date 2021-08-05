import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    padding-inline-start: 0px;

`;

export const Item = styled.li`
    padding-right: 30px;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({activeClassName}))`
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navigation.elems};
    padding: 10px;

    &${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.navigation.elems};
        box-sizing: border-box;
        border-radius: 24px;
        padding: 16px 24px;
    }
`;