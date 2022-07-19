import axios from "axios";

const api = axios.create({
    baseURL: process.env.APP_URL,
    timeout: 1000,
    headers: { Accept: "application/json" },
});

export default api;
