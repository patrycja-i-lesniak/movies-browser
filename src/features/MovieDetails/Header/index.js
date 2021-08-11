import { TextWrapper, Wrapper, WrapperPoster, TitleHeader, MovieDetailsHeader } from "./styled";
import HeaderRating from "./HeaderRating";

const Header = () => {
    const title = "Mulan long title"; //temporary - waiting for API/ reducer.

    return (
        <MovieDetailsHeader>
            <WrapperPoster>
                <Wrapper>
                    <TextWrapper>
                        <TitleHeader>{title}</TitleHeader>
                        <HeaderRating />
                    </TextWrapper>
                </Wrapper>
            </WrapperPoster>
        </MovieDetailsHeader>
    );
};
export default Header;