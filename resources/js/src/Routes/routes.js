import ChangePasswordPage from "../Pages/Admin/ChangePasswordPage";
import MyProfile from "../Pages/Frontend/MyProfile";

export const adminRoutes = [

    {
        Path:'settings/change-password',
        Component:ChangePasswordPage
    }

]


export const userRoutes = [

    {
        Path:'user/my-profile',
        Component:MyProfile
    }

]
