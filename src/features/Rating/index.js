import star from "../Images/star.svg";
import {
    RateingField,
    StarIcon,
    Note,
    RateingScale,
    Votes,
} from "./styled";

export const Rateing = () => {
    return (
        <RateingField>
            <StarIcon src={star} alt="" />
            <Note>7,8</Note>
            <RateingScale>/10</RateingScale>
            <Votes>335 votes</Votes>
        </RateingField>
    )
};

export const MobileRateing = () => {
    return (
        <RateingField>
            <StarIcon src={star} alt="" />
            <Note>7,8</Note>
            <Votes>35 votes</Votes>
        </RateingField>
    )
};