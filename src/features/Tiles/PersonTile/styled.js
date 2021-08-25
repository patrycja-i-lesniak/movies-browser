import styled from "styled-components";

export const PersonDetailsTile = styled.article`
    background: ${({ theme }) => theme.colors.tile.background};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    min-height: 544px;
    padding: 40px;
    margin-bottom: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        padding: 32px;
        margin-bottom: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        min-height: 328px;
        padding: 24px;
        margin-bottom: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        padding: 16px;
    }
`;

export const PersonPhoto = styled.img`
    max-width: 312px;
    max-height: 464px;
    border-radius: 5px;
    margin-right: 40px;
    float: left;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 188px;
        height: 280px;
        margin: 0 20px 0 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        width: 114px;
        height: 169px;
        margin: 0 16px 0 0;
    }
`;

export const Content = styled.div``;

export const PersonName = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 16px;
    }
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-bottom: 8px;
`;

export const PersonDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Label = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tile.details};
    margin: 0 10px 0 0;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        display: none;
    }
`;

export const PersonData = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tile.data};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 12px;
        line-height: 1.3;
    }
`;

export const Biography = styled.div`
    font-size: 20px;
    margin-top: 24px;
    line-height: 1.6;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 16px;
        margin-top: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 14px;
        margin-top: 0;
    }
`;


