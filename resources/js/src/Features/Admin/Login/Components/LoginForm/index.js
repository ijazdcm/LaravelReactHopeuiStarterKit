import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../Context/Admin/AuthContext";
import AuthService from "../../Service/AuthService";
import Cookies from "js-cookie";

const LoginForm = () => {
    const { authState, setAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "sai@gmail.com",
        password: "1412",
    });

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(state).then((e) => {
            if (e.status == 200) {

                Cookies.set("auth_token", e.data.token);

                setAuthState({
                    ...authState,
                    isAuthenticated: true,
                    isAdmin: true,
                    user:e.data.user
                });

                navigate("/admin/dashboard", { replace: true });

            }
        });
    };

    return (
        <form onSubmit={(e) => handleLogin(e)}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            onChange={(e) =>
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
                            onChange={(e) =>
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
                <div className="col-lg-12 d-flex justify-content-between">
                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                        >
                            Remember Me
                        </label>
                    </div>
                    {/* <a href="recoverpw.html">Forgot Password?</a> */}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
