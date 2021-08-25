// import { useSelector } from "react-redux";
// import { selectMovieData } from "../PopularMovies/MovieDetails/movieDetailsSlice";
import star from "./star.svg";
import {
    RateWrapper,
    StarIcon,
    VoteAverage,
    RatingScale,
    VoteCount,


} from "./styled";


export const Rate = ({ vote_average, vote_count, mobile = false, small = false, big = false }) => {        // big, small, mobile
    // const movieData = useSelector(selectMovieData);

    // const vote_average = movieData.vote_average;
    // const vote_count = movieData.vote_count;

    return (
        <>
            {mobile ?
                (
                    <RateWrapper>
                        <StarIcon mobile={mobile} src={star} alt="star" />
                        <VoteAverage mobile={mobile}>{vote_average}</VoteAverage>
                        <VoteCount mobile={mobile}>{vote_count} votes</VoteCount>
                    </RateWrapper>
                )
                : small ?
                    (
                        <RateWrapper>
                            <StarIcon small src={star} alt="star" />
                            <VoteAverage small>{vote_average}</VoteAverage>
                            <RatingScale small>/10</RatingScale>
                            <VoteCount small>{vote_count} votes</VoteCount>
                        </RateWrapper>
                    )
                    : big ?
                        (
                            <RateWrapper>
                                <StarIcon big src={star} alt="star" />
                                <VoteAverage big>{vote_average}</VoteAverage>
                                <RatingScale big>/10</RatingScale>
                                <VoteCount big>{vote_count} votes</VoteCount>
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

