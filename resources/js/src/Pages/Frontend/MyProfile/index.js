import { useContext } from "react";
import AuthContext from "../../../Context/Admin/AuthContext";

const MyProfile = () => {
    const { authState, setAuthState } = useContext(AuthContext);

    return (
        <div className="row mt-5">
            <div className="col-lg-12">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                    <img
                                        src="../../assets/images/avatars/01.png"
                                        alt="User-Profile"
                                        className="theme-color-default-img img-fluid rounded-pill avatar-100"
                                    />
                                </div>
                                <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                    <h4 className="me-2 h4">
                                        {authState.user.name}
                                    </h4>
                                    <span>
                                        -{" "}
                                        {authState.user.is_admin
                                            ? "Super Admin"
                                            : "User"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <div className="header-title">
                            <h4 className="card-title">Activity</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-inline m-0 p-0">
                            <li className="d-flex mb-2">
                                <div className="news-icon me-3">
                                    <svg width={20} viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                                        />
                                    </svg>
                                </div>
                                <p className="news-detail mb-0">
                                    there is a meetup in your city on fryday at
                                    19:00. <a href="#">see details</a>
                                </p>
                            </li>
                            <li className="d-flex">
                                <div className="news-icon me-3">
                                    <svg width={20} viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                                        />
                                    </svg>
                                </div>
                                <p className="news-detail mb-0">
                                    20% off coupon on selected items at
                                    pharmaprix{" "}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
