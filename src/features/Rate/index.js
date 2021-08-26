import star from "../Images/star.svg";
import {
    RateWrapper,
    StarIcon,
    VoteAverage,
    RatingScale,
    VoteCount,


} from "./styled";


export const Rate = ({ vote_average, vote_count, tile = false, small = false}) => {        // big, small, mobile, tile

    return (
        <>
            {tile ?
                (
                    <RateWrapper>
                        <StarIcon tile src={star} alt="star" />
                        <VoteAverage tile >{vote_average}</VoteAverage>
                        <VoteCount tile >{vote_count} votes</VoteCount>
                    </RateWrapper>
                    )
                     :
                    (
                        <RateWrapper>
                            <StarIcon src={star} alt="star" />
                            <VoteAverage>{vote_average}</VoteAverage>
                            <RatingScale>/10</RatingScale>
                            <VoteCount>{vote_count} votes</VoteCount>
                        </RateWrapper>
                    )
            }
        </>
    );
};

