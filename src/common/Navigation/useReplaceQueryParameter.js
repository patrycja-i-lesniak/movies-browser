import { useHistory, useLocation } from "react-router-dom";

import { paginationQueryParamName } from "../../queryParamNames";

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
        searchParams.delete(paginationQueryParamName);

        history.push(`${location.pathname.includes("/movie") ? "/movies" : "/people"}?${searchParams.toString()}`);
    };
};