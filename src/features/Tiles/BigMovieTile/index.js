import poster from "../../Images/poster.png";
import { Rating } from "../../Rating";
import {
    MovieDetailsTile,
    Image,
    Content,
    Title,
    Year,
    Details,
    MovieDetails,
    Label,
    MovieData,
    Tags,
    Tag,
    Description,
} from "./styled";

export const BigMovieTile = () => {
    return (
        <MovieDetailsTile>
            <Image src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Details>
                    <MovieDetails>
                        <Label>Production:</Label>
                        <MovieData>China, USA </MovieData>
                    </MovieDetails>
                    <MovieDetails>
                        <Label>Release date:</Label>
                        <MovieData>24.10.2020</MovieData>
                    </MovieDetails>
                </Details>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Rating />
                </Content>
                <Description>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
                </Description>
        </MovieDetailsTile>
    );
};