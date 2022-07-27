import { useContext } from "react";
import AuthContext from "../../../../../Context/Admin/AuthContext";

const ChangePassword = () => {
    const { authState, setAuthState } = useContext(AuthContext);

    return (
        <div className="row py-3">
            <div className="col-lg-12">
                <div className="card">
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
                                        {" "}
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
                            <h4 className="card-title">Change Password</h4>
                        </div>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
