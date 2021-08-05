import poster from "../Images/poster.jpg";
import posterSmall from "../Images/posterSmall.jpg";
import { Rateing, MobileRateing } from "../Rating";
import {
    MovieDetailsTile,
    Image,
    Content,
    Title,
    Year,
    Details,
    Label,
    MovieData,
    Tags,
    Tag,
    Description,
    ImageSmall,
} from "./styled";

export const MovieTile = () => {
    return (
            <MovieDetailsTile>
                <Image src={poster} alt="" />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Details>
                        <Label>Production:</Label>
                        <MovieData>China, United States of America </MovieData>

                        <Label>Release date:</Label>
                        <MovieData>24.10.2020</MovieData>
                    </Details>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
                        <Tag>Drama</Tag>
                    </Tags>
                    <Rateing />
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order to save her father.
                        Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    </Description>
                </Content>
            </MovieDetailsTile>
    )
};

export const MobileMovieTile = () => {
    return(
        <MovieDetailsTile>
                <ImageSmall src={posterSmall} alt="" />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Details>
                        <MovieData>China, United States of America </MovieData>
                        <MovieData>24.10.2020</MovieData>
                    </Details>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
                        <Tag>Drama</Tag>
                    </Tags>
                    <MobileRateing/>
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order to save her father.
                        Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    </Description>
                </Content>
            </MovieDetailsTile>
    )
};