import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toPeople } from "../../core/App/routes";
import { selectMoviesData } from "../../features/PopularMovies/moviesSlice";
import { selectPeopleData } from "../../features/PopularPeople/peopleSlice";

export const useAPIPages = () => {
    const { pathname } = useLocation();

    const APIData = useSelector(
        pathname === toPeople()
            ? selectPeopleData
            : selectMoviesData
    );

    return [APIData.page, APIData.total_pages];
};
