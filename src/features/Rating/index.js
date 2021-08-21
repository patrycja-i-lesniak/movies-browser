import star from "../Images/star.svg";
import {
    RatingField,
    StarIcon,
    Note,
    RatingScale,
    Votes,
} from "./styled";

export const Rating = ({movieData}) => {
    const vote_average = movieData.vote_average;
    const vote_count = movieData.vote_count;
   
    return (
        <RatingField>
            <StarIcon src={star} alt="" />
            <Note>{vote_average}</Note>
            <RatingScale>/10</RatingScale>
            <Votes>{vote_count} votes</Votes>
        </RatingField>
    );
};

export const MobileRating = ({movieData}) => {
    const vote_average = movieData.vote_average;
    const vote_count = movieData.vote_count;
    
    return (
        <RatingField>
            <StarIcon src={star} alt="" />
            <Note>{vote_average}</Note>
            <Votes>{vote_count}</Votes>
        </RatingField>
    );
};