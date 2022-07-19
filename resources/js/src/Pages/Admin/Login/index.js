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
                        {/* <a href="recoverpw.html">Forgot Password?</a> */}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
