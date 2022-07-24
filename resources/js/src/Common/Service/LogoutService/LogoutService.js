import api from "../../../Config"

const logoutUrl = "logout"

class LogoutService {
    
    logout() {
        return api.post(logoutUrl)
    }
}

export default new LogoutService()
