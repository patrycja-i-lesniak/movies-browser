import star from "./star.svg";
import {
    RateWrapper,
    StarIcon,
    VoteAverage,
    RatingScale,
    VoteCount,
} from "./styled";

// final version to API
// Props: movie, movieMobile, header, headerMobile
// One of these props should be provided in the component to which the Rating component has been added.

// export const Rateing = ({ vote_average, vote_count }) => {
//     return (
//         <RateWrapper>
//             <StarIcon src={star} alt="" />
//             <VoteAverage>{vote_average}</VoteAverage>
//             <RatingScale>/10</RatingScale>
//             <VoteCount>{vote_count}</VoteCount>
//         </RateWrapper>
//     )
// };

// test version

export const Rating = () => {
    return (
        <RateWrapper>
            <StarIcon src={star} alt="" />
            <VoteAverage>7,8</VoteAverage>
            <RatingScale>/ 10</RatingScale>
            <VoteCount>35 votes</VoteCount>
        </RateWrapper>
    )
};
