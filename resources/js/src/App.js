import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import FrontendLayout from "./Layouts/FrontendLayout";
import LoginLayout from "./Layouts/LoginLayout";
import Home from "./Pages/Admin/Home";
import Login from "./Pages/Admin/Login";
import NotFound from "./Pages/Admin/NotFound";
import FHome from "./Pages/Frontend/Home";

export default function App() {
    const auth = true;
    const isSuperAdmin = true;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontendLayout />}>
                    <Route index element={<FHome />} />
                </Route>
                <Route path="admin/login" element={<LoginLayout />}>
                    <Route index element={<Login />} />
                </Route>
                <Route path="admin/dashboard" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
