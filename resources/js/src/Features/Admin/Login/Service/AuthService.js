import api from "../../../../Config"


const baseUrl = 'users'
const checkAuth = 'is-authententicated'

class AuthService{

    login(credentials) {
        return api.get(baseUrl)
      }

    isAuthenticated() {
        return api.get(checkAuth)
      }
}


export default new AuthService()
