import styled from "styled-components";

export const SectionWrapper = styled.section`
    padding: 16px;
    max-width: 1368px;
    margin: 0 auto;
`;

export const PeopleList = styled.ul`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(6, 1fr);
    list-style-type: none;
    padding: 0;
`;

export const PersonTile = styled.li`
    display: grid;
    grid-row-gap: 8px;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    word-break: break-word;
`;

export const ProfilePicture = styled.img`
    background: #C4C4C4;
    border-radius: 5px;
    width: 100%;
`;

export const TileTitle = styled.h2`
    font-size: 22px;
    line-height: 29px;
    color: ${({theme}) => theme.colors.textPrimary};
    margin: 0;
`;

export const Role = styled.p`
    margin: 0;
`;