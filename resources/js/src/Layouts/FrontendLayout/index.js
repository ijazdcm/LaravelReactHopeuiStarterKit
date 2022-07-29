import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import HomeNavigationBar from "../../Components/HomeNavigationBar";

const FrontendLayout = () => {
    return (
        <>
            <Toaster />
            {/* Navigation Bar For Home  */}
            <HomeNavigationBar />
            <div class="conatiner-fluid content-inner mt-4 py-0">
                <Outlet />
            </div>
        </>
    );
};

export default FrontendLayout;
