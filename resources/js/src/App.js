import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
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
import { adminRoutes, userRoutes } from "./Routes/routes";

export default function App() {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isAdmin: false,
        isLoading: true,
        user: {},
        permissions: [],
    });

    useEffect(() => {
        AuthService.isAuthenticated()
            .then((e) => {
                if (e.status == 200) {
                    let response = JSON.parse(e.data.user);

                    setAuthState({
                        ...authState,
                        isAuthenticated: true,
                        isLoading: false,
                        isAdmin: response.is_admin ? true : false,
                        user: response,
                    });
                }
            })
            .catch((e) => {
                if (e.response.status == 401) {
                    Cookies.remove("auth_token");
                    setAuthState({
                        ...authState,
                        isAuthenticated: false,
                        isLoading: false,
                        isAdmin: false,
                        user: "",
                    });
                }
            });
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            authState.isAdmin ? (
                                <Navigate to="/dashboard" replace={true} />
                            ) : (
                                <FrontendLayout />
                            )
                        }
                    >
                        <Route index element={<FHome />} />

                        {userRoutes.map(({Path,Component},i)=>{

                            return <Route key={i} path={Path} element={<Component />} />
                        })

                        }

                    </Route>
                    <Route
                        path="/login"
                        element={
                            authState.isAuthenticated ? (
                                <Navigate to="/" replace={true} />
                            ) : (
                                <LoginLayout />
                            )
                        }
                    >
                        <Route
                            index
                            element={
                                authState.isAuthenticated &&
                                authState.isAdmin ? (
                                    <Navigate to="/dashboard" replace={true} />
                                ) : (
                                    <Login />
                                )
                            }
                        />
                    </Route>
                    <Route
                        path="/dashboard"
                        element={
                            authState.isAuthenticated && authState.isAdmin ? (
                                <AdminLayout />
                            ) : (
                                <Navigate to="/login" replace={true} />
                            )
                        }
                    >
                        <Route index element={<Home />} />
                        {adminRoutes.map(({ Path, Component },i) => {
                            return (
                                <Route key={i} path={Path} element={<Component />} />
                            );
                        })}
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
