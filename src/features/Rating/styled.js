import styled from "styled-components";

export const RatingField = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: start;
    align-items: end;
    grid-gap: 8px;
    margin: 24px 0;
`;

export const StarIcon = styled.img`
    height: 24px;
`;

export const RatingScale = styled.p`
    font-size: 14px;
    margin: 0;

`;

export const Votes = styled(RatingScale)`
    padding-left: 4px;
`;

export const Note = styled(RatingScale)`
    font-size: 22px;
    font-weight: 500;
`;