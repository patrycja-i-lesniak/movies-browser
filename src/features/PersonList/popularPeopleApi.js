import axios from "axios";

import { APIKey } from "../../APIKey";
import { pathAPI } from "../../pathAPI";

export const getPopularPeopleData = page =>
    axios.get(`${pathAPI}person/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);