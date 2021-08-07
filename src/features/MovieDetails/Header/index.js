import { Rating } from "../../Rating";
import { TextWrapper, Wrapper, WrapperPoster, TitleHeader } from "./styled";
import poster from "./poster.png";
import HeaderRating from "./HeaderRating";

const Header = () => {
    const title = "Mulan long title"; //temporary - waiting for API/ reducer.

    return (
        <WrapperPoster>
            <Wrapper>
                <TextWrapper>
                    <TitleHeader>{title}</TitleHeader>
                    <HeaderRating />
                </TextWrapper>
            </Wrapper>
        </WrapperPoster>
    );
};
export default Header;