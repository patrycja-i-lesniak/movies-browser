import { useLocation } from "react-router-dom";

export const useQueryParameter = (queryParamName) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(queryParamName);
};