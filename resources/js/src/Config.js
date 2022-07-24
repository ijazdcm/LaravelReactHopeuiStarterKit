import axios from "axios"
import Cookies from "js-cookie"

const token = Cookies.get("auth_token")

const apiUrl = "http://127.0.0.1:8000/api/v1/"

const api = axios.create({
    baseURL: apiUrl,
    timeout: 1000000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,

        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

// Add a response interceptor
api.interceptors.response.use(
    function(response) {

        return response
    },
    function(error) {

        if(error.response.status===401)
        {
            if (window.location.pathname != "/"  &&  window.location.pathname != "/admin/login") {

                window.location.href = "/"
            }
        }


        return Promise.reject(error)
    }
)

export default api
