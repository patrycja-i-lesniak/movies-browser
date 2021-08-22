import { useSelector } from "react-redux";

import star from "../Images/star.svg";
import { selectMovieData } from "../PopularMovies/MovieDetails/movieDetailsSlice";
import {
    RatingField,
    StarIcon,
    Note,
    RatingScale,
    Votes,
} from "./styled";

export const Rating = () => {
    const movieData = useSelector(selectMovieData);

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

export const MobileRating = () => {
    const movieData = useSelector(selectMovieData);
    
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