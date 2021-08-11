import star from "../Images/star.svg";
import {
    RatingField,
    StarIcon,
    Note,
    RatingScale,
    Votes,
} from "./styled";

export const Rating = () => {
    return (
        <RatingField>
            <StarIcon src={star} alt="" />
            <Note>7,8</Note>
            <RatingScale>/10</RatingScale>
            <Votes>335 votes</Votes>
        </RatingField>
    )
};

export const MobileRating = () => {
    return (
        <RatingField>
            <StarIcon src={star} alt="" />
            <Note>7,8</Note>
            <Votes>35 votes</Votes>
        </RatingField>
    )
};