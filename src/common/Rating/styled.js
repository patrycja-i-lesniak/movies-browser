import styled from "styled-components";

export const RateWrapper = styled.div`
    display: grid;
    grid-template-columns: ${({ header }) => header ? "repeat(3, auto)" : "repeat(4, auto)"};
    grid-template-rows: ${({ header }) => header ? "auto auto" : ""};
    justify-content: start;
    justify-items: ${({ header }) => header ? "start" : ""};
    align-items: end;
    grid-column-gap: 8px;
    grid-row-gap: ${({header}) => header ? "16px" : ""};
    margin: 24px 0 0 0;
    grid-template-areas: ${({ header }) => header 
        ?
        `"star average scale"
        "vote vote vote"`
        :
        `"star average scale vote"`
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: ${({ headerMobile }) => headerMobile ? "repeat(4,auto)" : "repeat(3,auto)"};
        grid-template-areas:  ${({ headerMobile }) => headerMobile ? "star average scale vote" : "star average vote"};
        grid-column-gap: 4px;
        margin: 16px 0 0 0;
    }
`;

export const StarIcon = styled.img`
    width: ${({ header }) => header ? "40px" : "24px"};
    grid-area: star;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: ${({ headerMobile }) => headerMobile ? "16px" : "16px"};
        margin-right: ${({movieMobile}) => movieMobile ? "4px" : ""};
    }
`;

export const VoteAverage = styled.p`
    font-size: ${({ header, movieMobile  }) => header ? "30px" : movieMobile  ? "22px" : "16"};
    color: ${({ header }) => header ? "white" : "black"};
    font-weight: 500;
    margin: 0;
    grid-area: average;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: ${({ headerMobile }) => headerMobile ? "14px" : "13px"};
        font-weight: 600;
        color: ${({ headerMobile }) => headerMobile ? "white" : "black"};
    }
`;

export const RatingScale = styled.p`
    grid-area: scale;
    font-size: ${({ header }) => header ? "16px" : "14px"};
    margin: 0;
    color: ${({ header }) => header ? "white" : "black"};

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display:  ${({ headerMobile }) => headerMobile ? "" : "none"};
        font-size: 12px;
        color: ${({ headerMobile }) => headerMobile ? "white" : "black"};
    }
`;

export const VoteCount = styled.p`
    grid-area: vote;
    padding-left: 4px;
    font-size: ${({ header }) => header ? "16px" : "14px"};
    color: ${({ header }) => header ? "white" : "black"};
    margin: ${({ movieMobile  }) => movieMobile  ? "0" : "0 0 0 4px"};

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: ${({ headerMobile}) => headerMobile ? "12" : "13px"};
        color: ${({ headerMobile }) => headerMobile ? "white" : "darkGrey"};
        padding-left: 0;
    }
`;

export const MobileVoteCount = styled(VoteCount)`
    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        color: red;
        font-size: 10px;
}
`;
