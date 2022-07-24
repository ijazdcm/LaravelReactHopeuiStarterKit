import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthService from "../../Service/AuthService"
import Cookies from "js-cookie"
import toast from "react-hot-toast"

const LoginForm = () => {

    const navigate = useNavigate()

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const fillUser = () => {
        setState({
            email: "user@gmail.com",
            password: "1412"
        })
    }

    const fillAdmin = () => {
        setState({
            email: "admin@gmail.com",
            password: "1412"
        })
    }

    const handleLogin = e => {

        e.preventDefault()

        const loginToast = toast.loading("Authenticating...")

        AuthService.login(state).then(e => {
            if (e.status == 200) {
                toast.success("Authenticated!", {
                    id: loginToast
                })

                Cookies.set("auth_token", e.data.token)
                let response = JSON.parse(e.data.user)


                setTimeout(() => {
                    toast.dismiss(loginToast)
                    window.location.href = response.is_admin
                        ? "/dashboard"
                        : "/"
                }, 1000)
            }
        })
    }

    return (
        <form onSubmit={e => handleLogin(e)}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            onChange={e =>
                                setState({ ...state, email: e.target.value })
                            }
                            value={state.email}
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            onChange={e =>
                                setState({ ...state, password: e.target.value })
                            }
                            value={state.password}
                            type="password"
                            className="form-control"
                            id="password"
                            aria-describedby="password"
                            placeholder="Password"
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <button
                    type="button"
                    onClick={fillUser}
                    className="btn btn-sm btn-dark"
                >
                    Login as User
                </button>
                <button type="button" onClick={fillAdmin} className="btn btn-sm btn-dark">
                    Login as Admin
                </button>
            </div>
        </form>
    )
}

export default LoginForm
