import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar";
import TopNavigationBar from "../../Components/TopNavigationBar";

const AdminLayout = () => {
    return (
        <>
            <NavigationBar />
            <main className="main-content">
                <div className="position-relative">
                    <TopNavigationBar />
                </div>
                <div className="conatiner-fluid content-inner py-0">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default AdminLayout;
