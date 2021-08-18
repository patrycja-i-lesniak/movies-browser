import styled from "styled-components";

export const MovieDetailsTile = styled.article`
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
        display: grid;
        grid-template-columns:  min-content 1fr;
        grid-template-rows: auto;
        grid-gap: 16px;
        grid-template-areas:
            "image content"
            "description description";
    }
`;

export const Image = styled.img`
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
        margin: 0 0 8px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
        margin: 0;
    }
`;

export const Content = styled.div`

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-area: content;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 4px;
    }
`;

export const Year = styled.div`
    font-size: 22px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        color: ${({ theme }) => theme.colors.tile.year};
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 8px;
    }
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-bottom: 8px;
`;

export const MovieDetails = styled.div`
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

export const MovieData = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tile.data};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 12px;
        line-height: 1.3;
    }
`;

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 8px -4px;
    }
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.tile.tagBackground};
    padding: 8px 16px;
    font-size: 14px;
    margin-right: 8px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        padding: 4px 8px;
        font-size: 10px;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    margin-top: 24px;
    line-height: 1.6;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 16px;
        grid-area: description;
        margin-top: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 14px;
        margin-top: 0;
    }
`;


