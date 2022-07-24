import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import HomeNavigationBar from "../../Components/HomeNavigationBar";

const FrontendLayout = () => {
    return (
        <>
         <Toaster />
            {/* Navigation Bar For Home  */}
            <HomeNavigationBar />

        </>
    );
};

export default FrontendLayout;
