import styled from "styled-components";

export const SectionWrapper = styled.section`
    padding: 0 16px;
`;

export const Title = styled.h1`
    font-size: 36px;
    line-height: 1.2;
    margin: 0 0 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;

export const PeopleList = styled.ul`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(6, 1fr);
    list-style-type: none;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const PersonTile = styled.li`
    display: grid;
    grid-row-gap: 8px;
    align-content: start;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.tile.background};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
`;

export const ProfilePicture = styled.img`
    background: ${({ theme }) => theme.colors.tile.substitutionPicture};
    border-radius: 5px;
    width: 100%;
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
    }
`;

export const Role = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.tile.role};

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 16px;
        line-height: 1.4;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const ShowMoreButton = styled.button`
    border: none;
    background: none;
    padding: 2px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 6px;
    align-items: center;
    color: ${({ theme }) => theme.colors.tile.role};

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;