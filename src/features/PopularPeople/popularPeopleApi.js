import axios from "axios";
import { APIKey, APIPath } from "../../API";


export const getPopularPeopleData = page =>
    axios.get(`${APIPath}person/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);