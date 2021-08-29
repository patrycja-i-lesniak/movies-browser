import styled from "styled-components";
import { TilesTile } from "../TilesTile";

export const SiteTitle = styled.h1`
    font-size: 36px;
    line-height: 1.2;
    margin: 0 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Tile = styled(TilesTile)`
    grid-template-rows: auto 1fr;
    grid-row-gap: 16px;
    color: inherit;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-template-rows: auto;
        padding: 16px;
        grid-template-columns: min-content 1fr;
        grid-gap: 16px;
        grid-template-areas:
            "image content"
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-area: content;
        justify-content: flex-start;
    }
`;

export const Picture = styled.img`
    /* background: ${({ theme }) => theme.colors.substitutionPicture}; */
    /* border-radius: 5px; */
    width: 100%;
    aspect-ratio: 2 / 3;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        width: 114px;
        height: 169px;
    }
`;

export const TileTitle = styled.h2`
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    font-weight: 500;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 14px;
        margin: 0;
    }
`;

export const Year = styled.p`
        margin: 10px 0;
        font-size: 16px;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 16px;
        line-height: 1.4;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 13px;
        line-height: 1.3;
        margin: 8px 0;
    }
`;

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;
    margin: 10px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 8px 0px;
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.tagBackground};
    padding: 8px 16px;
    font-size: 14px;
    margin: 0 8px 8px 0;
    border-radius: 5px;
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        padding: 4px 8px;
        font-size: 10px;
        margin-bottom: 8px;
    }
`;

export const Role = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 16px;
        line-height: 1.4;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;