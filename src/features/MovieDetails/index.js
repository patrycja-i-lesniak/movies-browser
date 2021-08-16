import { Header } from "./Header";
import { Wrapper } from "./styled";
import { BigMovieTile } from "../Tiles/BigMovieTile";
import PeopleTiles from "../Tiles/PeopleTiles";
import { useAPIData } from "./useAPIData";
import  {Loader} from "../../common/Loader";

export const MovieDetails = () => {
    const APIData = useAPIData();
    console.log(APIData);

    return (
        <>
            {APIData.status === "loading" && <Loader />}
            {APIData.status === "success" &&
                <>
                    <Header movieData={APIData.movieData.data}/>
                    <Wrapper>
                        <BigMovieTile />
                        <PeopleTiles title="cast" />
                        <PeopleTiles title="crew" />
                    </Wrapper>
                </>
            }
        </>
    );
};