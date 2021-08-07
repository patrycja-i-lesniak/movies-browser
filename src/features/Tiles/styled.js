import styled from "styled-components";

export const MovieDetailsTile = styled.article`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    background: ${({ theme }) => theme.colors.tile.background};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin: 20px auto;
    max-width: 1368px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        padding: 16px;
        grid-gap: 16px;
    }
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        width: 30%;
        height: 30%;
    }
`;

export const Content = styled.div`
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-weight: 500;
        font-size: 16px;
}
`;

export const Year = styled.div`
    font-size: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.tile.details}; 
    }
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    margin: 24px 0;
`;

export const Label = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tile.details};
    margin: 0;
`;

export const MovieData = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tile.data};
    padding: 0;
    margin: 0;
`;


export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 0px -8px;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.tile.tagBackground};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    margin-top: 24px;
    line-height: 1.6;
`;

export const PersonTile = styled(MovieDetailsTile)`
    grid-template-rows: auto 1fr;
`;

export const ImageSmall = styled.img`
    width: 312px;
    height: 464px;

    @media(max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        width: 30%;
        height: 30%;
    }
`;