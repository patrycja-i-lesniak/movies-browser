import styled from "styled-components";

export const RatingField = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: end;
    grid-gap: 8px;
    margin: 0;
`;

export const StarIcon = styled.img`
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 16px;
        height: 15.25px;
    }
`;

export const Note = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 13px;
    }
`;

export const RatingScale = styled.p`
    font-size: 14px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display: none;
    }
`;

export const Votes = styled.p`
    padding-left: 4px;
    font-size: 14px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 13px;
    }
`;