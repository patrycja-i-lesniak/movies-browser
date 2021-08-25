import styled, { css } from "styled-components";

export const RateWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: end;
    margin: 0;
    grid-template-areas:
        "star average scale vote";

        @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
            grid-template-columns: repeat(3, auto);
            grid-template-areas: "star average vote";
            grid-column-gap: 4px;
            margin: 16px 0 0 0;
        };

    ${({ big }) => big && css`
        grid-template-columns: repeat(3, auto);
        grid-template-rows: auto auto;
        justify-items: start;
        grid-row-gap: 16px;
        grid-template-areas:
            "star average scale"
            "vote vote vote";

            @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
                grid-template-columns: repeat(4,auto);
                grid-template-areas:  "star average scale vote";
            };
    `};
`;

export const StarIcon = styled.img`
    width: 24px;
    grid-area: star;
    margin-right: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 16px;
    };

    ${({ big }) => big && css`
        width: 40px;
    `};

    ${({ mobile }) => mobile && css`
        margin-right: 4px;
    `};

`;

export const VoteAverage = styled.p`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 500;
    margin: 0 8px 0 0;
    grid-area: average;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 13px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.textPrimary};
    };

    ${({ big }) => big && css`
        font-size: 30px;
        color: ${({ theme }) => theme.colors.textSecondary};
    `};

    ${({ small }) => small && css`
        font-size: 14px;
        color: ${({ theme }) => theme.colors.textSecondary};
    `};

    ${({ mobile }) => mobile && css`
        font-size: 16px; 
    `};
`;

export const RatingScale = styled.p`
    grid-area: scale;
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display:  none;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.textPrimary};
    };

    ${({ big }) => big && css`
        font-size: 16px;
        color: ${({ header }) => header ? "white" : "black"};
    `};

    ${({ small }) => small && css`
        color: ${({ theme }) => theme.colors.textSecondary};
        display:  none;
        padding: 0;
    `};
`;

export const VoteCount = styled.p`
    grid-area: vote;
    padding-left: 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0 0 0 4px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.textTertiary};
        padding-left: 0;
    };

    ${({ big }) => big && css`
        font-size: 16px;
        color: ${({ theme }) => theme.colors.textSecondary};
    `};

    ${({ small }) => small && css`
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 12px;
    `};

    ${({ movieMobile }) => movieMobile && css`
        margin: 0;
    `};
`;
