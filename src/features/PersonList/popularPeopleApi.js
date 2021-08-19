import axios from "axios";

const APIKey = "api_key=3af561a12389e6d632bf79207cb88b6c";
const pathAPI = "https://api.themoviedb.org/3/";

export const getPopularPeopleData = page =>
    axios.get(`${pathAPI}person/popular?${APIKey}&language=en-US&page=${page}`)
        .then(response => response.data);