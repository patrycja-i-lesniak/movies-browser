import { useHistory, useLocation } from "react-router-dom";
import { toMovies, toPeople } from "../core/App/routes";
import { paginationQueryParamName, searchQueryParamName } from "./queryParamNames";

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);
        
        if (!value) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        if (key === searchQueryParamName) {
            searchParams.delete(paginationQueryParamName);
        }
        
        history.push(`${location.pathname.includes("/movie") ? toMovies() : toPeople()}?${searchParams.toString()}`);
    };
};