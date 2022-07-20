import { Outlet } from "react-router-dom";
import Logo from "../../Assets/Logo";

const LoginLayout = () => {
    return (
        <>
           <div className="wrapper">
                <section className="login-content">
                    <div className="row m-0 align-items-center bg-white vh-100">
                        <div className="col-md-6">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                                        <div className="card-body">
                                            <a
                                                href="../../dashboard/index.html"
                                                className="navbar-brand d-flex align-items-center mb-3"
                                            >
                                                {/*Logo start*/}
                                               <Logo />
                                                {/*logo End*/}{" "}
                                                <h4 className="logo-title ms-3">
                                                    React Starter Kit
                                                </h4>
                                            </a>
                                            <h2 className="mb-2 text-center">
                                                Log In
                                            </h2>
                                            <p className="text-center">
                                                Login to stay connected.
                                            </p>
                                            <Outlet />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sign-bg">
                                <svg
                                    width={280}
                                    height={230}
                                    viewBox="0 0 431 398"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.05">
                                        <rect
                                            x="-157.085"
                                            y="193.773"
                                            width={543}
                                            height="77.5714"
                                            rx="38.7857"
                                            transform="rotate(-45 -157.085 193.773)"
                                            fill="#3B8AFF"
                                        />
                                        <rect
                                            x="7.46875"
                                            y="358.327"
                                            width={543}
                                            height="77.5714"
                                            rx="38.7857"
                                            transform="rotate(-45 7.46875 358.327)"
                                            fill="#3B8AFF"
                                        />
                                        <rect
                                            x="61.9355"
                                            y="138.545"
                                            width="310.286"
                                            height="77.5714"
                                            rx="38.7857"
                                            transform="rotate(45 61.9355 138.545)"
                                            fill="#3B8AFF"
                                        />
                                        <rect
                                            x="62.3154"
                                            y="-190.173"
                                            width={543}
                                            height="77.5714"
                                            rx="38.7857"
                                            transform="rotate(45 62.3154 -190.173)"
                                            fill="#3B8AFF"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                            <img
                                src="../../assets/images/auth/01.png"
                                className="img-fluid gradient-main animated-scaleX"
                                alt="images"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoginLayout;
