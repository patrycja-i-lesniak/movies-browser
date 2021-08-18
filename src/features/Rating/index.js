import star from "../Images/star.svg";
import {
    RatingField,
    StarIcon,
    Note,
    RatingScale,
    Votes,
} from "./styled";

export const Rating = ({movieData}) => {
    const note = movieData.vote_average;
    const votes = movieData.vote_count;
    return (
        <RatingField>
            <StarIcon src={star} alt="rating star" />
            <Note>{note}</Note>
            <RatingScale>/10</RatingScale>
            <Votes>{votes} votes</Votes>
        </RatingField>
    );
};

export const MobileRating = () => {
    return (
        <RatingField>
            <StarIcon src={star} alt="" />
            <Note>7,8</Note>
            <Votes>35 votes</Votes>
        </RatingField>
    );
};