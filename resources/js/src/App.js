import React, { useContext, useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./Context/Admin/AuthContext";
import AuthService from "./Features/Admin/Login/Service/AuthService";
import AdminLayout from "./Layouts/AdminLayout";
import FrontendLayout from "./Layouts/FrontendLayout";
import LoginLayout from "./Layouts/LoginLayout";
import Home from "./Pages/Admin/Home";
import Login from "./Pages/Admin/Login";
import NotFound from "./Pages/Admin/NotFound";
import FHome from "./Pages/Frontend/Home";

export default function App() {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isAdmin: false,
        permissions: [],
    });

    useEffect(() => {
        AuthService.isAuthenticated().then((e) => {
            if (e.status == 200) {
                setAuthState({
                    ...authState,
                    isAuthenticated: true,
                    isAdmin: true,
                });
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FrontendLayout />}>
                        <Route index element={<FHome />} />
                    </Route>
                    <Route path="admin/login" element={<LoginLayout />}>
                        <Route
                            index
                            element={
                                authState.isAuthenticated &&
                                authState.isAdmin ? (
                                    <Navigate
                                        to="/admin/dashboard"
                                        replace={true}
                                    />
                                ) : (
                                    <Login />
                                )
                            }
                        />
                    </Route>
                    <Route
                        path="admin/dashboard"
                        element={
                            authState.isAuthenticated ? (
                                <AdminLayout />
                            ) : (
                                <Navigate to="/admin/login" replace={true} />
                            )
                        }
                    >
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
