import star from "../../../Images/star.svg"
import { HeaderDiv, HeaderNote, HeaderScale, HeaderStarImage, HeaderVotes, Wrapper } from "./styled";

const HeaderRating = () => (
    <HeaderDiv>
        <Wrapper>
            <HeaderStarImage src={star} alt="star" />
            <div>
                <HeaderNote>7,8</HeaderNote>
                <HeaderScale>/ 10</HeaderScale>
            </div>
        </Wrapper>
        <HeaderVotes>335 votes</HeaderVotes>
    </HeaderDiv>
);

export default HeaderRating;