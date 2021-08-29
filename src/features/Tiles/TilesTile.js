import styled from "styled-components";
import { Link } from "react-router-dom";

export const TilesTile = styled(Link)`
    text-decoration: none;
    display: grid;
    grid-row-gap: 8px;
    align-content: start;
    padding: 16px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.tile.background};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    user-select: none;

    &:hover {
        box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.tile.hoverColor};
}
    &:active {
        border: 1px solid ${({ theme }) => theme.colors.tile.activeColor};
        box-shadow: none;
}
`;
