import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("auth_token");

const apiUrl = "http://127.0.0.1:8000/api/v1/";

const api = axios.create({
    baseURL: apiUrl,
    timeout: 1000000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,

        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export default api;
