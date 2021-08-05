import styled from "styled-components";

export const RateingField = styled.div`
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

export const RateingScale = styled.p`
    font-size: 14px;
    margin: 0;

`;

export const Votes = styled(RateingScale)`
    padding-left: 4px;
`;

export const Note = styled(RateingScale)`
    font-size: 22px;
    font-weight: 500;
`;