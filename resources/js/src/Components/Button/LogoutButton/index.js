import Cookies from "js-cookie"
import { useContext } from "react"
import toast from "react-hot-toast"
import LogoutService from "../../../Common/Service/LogoutService/LogoutService"
import AuthContext from "../../../Context/Admin/AuthContext"

const LogoutButton = ({ btnText = "Logout" }) => {
    const { authState, setAuthState } = useContext(AuthContext)
    const handleLogout = e => {

        e.preventDefault()

        const logoutToast = toast.loading("Logging out...")

        LogoutService.logout().then(e => {


            if (e.status == 204) {

                toast.success("Logged Out!", {
                    id: logoutToast
                })


                Cookies.remove("auth_token")

                setAuthState({
                    ...authState,
                    isAuthenticated: false,
                    isAdmin: false,
                    user: ""
                })
            }
        })
    }

    return (
        <a onClick={(e)=>handleLogout(e)} className="dropdown-item" type="button">
            {btnText}
        </a>
    )
}

export default LogoutButton
