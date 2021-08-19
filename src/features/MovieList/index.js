import MovieTiles from "../Tiles/MovieTiles";
import { useAPIData } from "../../useAPIData";
import { Loader } from "../../common/Loader";
import Error from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { Wrapper } from "../MovieDetails/styled";
// import { Pagination } from "../../common/Pagination";

const MovieList = () => {
    const APIData = useAPIData();

    const MovieListContent = () => {
        switch (APIData.status) {
            case "loading":
                return < Loader />;
            case "success":
                return (
                    <>
                        <Wrapper>
                            <MovieTiles title="Popular Movie"
                                popularMoviesData={APIData.popularMoviesData.data}
                            />
                        </Wrapper>
                        {/* <Pagination popularMovieData={APIData.popularMoviesData.data}/> */}
                    </>);
            case "error":
                return <Error />;
            default:
                return <NoResults />;
        };
    };

    return (
        <MovieListContent />
    );
};

export default MovieList;