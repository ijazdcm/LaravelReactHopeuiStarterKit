import api from "../../../../Config";

const loginRoute = "admin-login";
const checkAuth = "admin/is-authententicated";

class AuthService {
    login(credentials) {
        return api.post(loginRoute, credentials);
    }

    isAuthenticated() {
        return api.get(checkAuth);
    }
}

export default new AuthService();
