import Logo from "../../Assets/Logo";

const TopNavigationBar = ({handleNavigationToggle,toggleStatus}) => {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
            <div className="container-fluid navbar-inner">
                <a href="../dashboard/index.html" className="navbar-brand">
                    {/*Logo start*/}
                    <Logo />
                    {/*logo End*/}
                    <h4 className="logo-title">React Starter Kit</h4>
                </a>
                <div
                    className="sidebar-toggle"
                    data-toggle="sidebar"
                    data-active={toggleStatus}
                    onClick={handleNavigationToggle}
                >
                    <i className="icon">
                        <svg width="20px" height="20px" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                            />
                        </svg>
                    </i>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <span className="mt-2 navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="py-0 nav-link d-flex align-items-center"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="../assets/images/avatars/01.png"
                                    alt="User-Profile"
                                    className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
                                />

                                <div className="caption ms-3 d-none d-md-block ">
                                    <h6 className="mb-0 caption-title">
                                        Saravana Sai
                                    </h6>
                                    <p className="mb-0 caption-sub-title">
                                        Super Admin
                                    </p>
                                </div>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="../dashboard/app/user-profile.html"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="../dashboard/app/user-privacy-setting.html"
                                    >
                                        Privacy Setting
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="../dashboard/auth/sign-in.html"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavigationBar;
