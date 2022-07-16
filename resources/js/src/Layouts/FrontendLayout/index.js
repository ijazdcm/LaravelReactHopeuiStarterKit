import { Outlet } from "react-router-dom";

const FrontendLayout = () => {
    return (
        <>
            <h1>Frontend Layout</h1>
            <Outlet />
        </>
    );
};

export default FrontendLayout;
