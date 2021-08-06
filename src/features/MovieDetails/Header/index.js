import { Rating } from "../../Rating";
import { TextWrapper, Wrapper, WrapperPoster, TitleHeader } from "./styled";
import poster from "./poster.png";

const Header = () => {
    const title = "Mulan long title"; //temporary - waitng for API/ reducer.
    
    return (
        <WrapperPoster>
            <Wrapper>
                <TextWrapper>
                    <TitleHeader>{title}</TitleHeader>
                    <Rating />
                </TextWrapper>
            </Wrapper>
        </WrapperPoster>
    );
};
export default Header;