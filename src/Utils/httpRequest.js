import axios from "axios"

const CORS_FIXER = "https://cors-anywhere.herokuapp.com/";

const axiosApi = axios.create();


let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type" : "application/json;charset=UTF-8"
}

export async function getRequest(url, config = {}, params = {}) {
    return await axiosApi.get(
        CORS_FIXER+url,
        {
            ...config,
            headers,
            params
        })
        .then((response) => {
            return response.data;
        })

}