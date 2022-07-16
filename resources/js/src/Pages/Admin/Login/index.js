const Login = () => {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="email"
                                placeholder=" "
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                aria-describedby="password"
                                placeholder=" "
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
                        <a href="recoverpw.html">Forgot Password?</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </div>
                <p className="text-center my-3">
                    or sign in with other accounts?
                </p>
                <div className="d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal list-group-flush">
                        <li className="list-group-item border-0 pb-0">
                            <a href="#">
                                <img
                                    src="../../assets/images/brands/fb.svg"
                                    alt="fb"
                                />
                            </a>
                        </li>
                        <li className="list-group-item border-0 pb-0">
                            <a href="#">
                                <img
                                    src="../../assets/images/brands/gm.svg"
                                    alt="gm"
                                />
                            </a>
                        </li>
                        <li className="list-group-item border-0 pb-0">
                            <a href="#">
                                <img
                                    src="../../assets/images/brands/im.svg"
                                    alt="im"
                                />
                            </a>
                        </li>
                        <li className="list-group-item border-0 pb-0">
                            <a href="#">
                                <img
                                    src="../../assets/images/brands/li.svg"
                                    alt="li"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="mt-3 text-center">
                    Don’t have an account?{" "}
                    <a href="sign-up.html" className="text-underline">
                        Click here to sign up.
                    </a>
                </p>
            </form>
        </>
    );
};

export default Login;
