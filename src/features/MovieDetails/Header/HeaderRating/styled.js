import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 32px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: row;
    margin-bottom: 9.36px;
    };
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: row;
    margin-bottom: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: row;
    margin-bottom: 0;
    };
`;

export const HeaderStarImage = styled.img`
    width: 38.12px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 30.5px;
        height: 32px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 15.25px;
        height: 16px;
    };
`;

export const HeaderNote = styled.span`
    margin: 0 7px 0 8px;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 24px;
        margin: 0 4px 0 8px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 14px;
        line-height: 130%;
        margin: 0 2px 0 8px;
    };
`;

export const HeaderScale = styled.span`
    align-self: center;
    font-size: 16px;
    line-height: 120%;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
    };
    
    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 10px;
    line-height: 120%;
    };
`;

export const HeaderVotes = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 120%;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
    align-self: flex-end;
    font-size: 10px;
    line-height: 120%;
    margin-left: 8px;
    };
`;