import { useSelector } from "react-redux";

import star from "../../../Images/star.svg";
import { selectMovieData } from "../../movieDetailsSlice";
import {
    HeaderDiv,
    HeaderNote,
    HeaderScale,
    HeaderStarImage,
    HeaderVotes,
    Wrapper
} from "./styled";

const HeaderRating = () => {
    const movieData = useSelector(selectMovieData);

    const rating = movieData.vote_average;
    const votesNumber = movieData.vote_count;

    return (
        <HeaderDiv>
            <Wrapper>
                <HeaderStarImage src={star} alt="star" />
                <div>
                    <HeaderNote>{rating}</HeaderNote>
                    <HeaderScale>/ 10</HeaderScale>
                </div>
            </Wrapper>
            <HeaderVotes>{votesNumber} votes</HeaderVotes>
        </HeaderDiv>
    );
};

export default HeaderRating;