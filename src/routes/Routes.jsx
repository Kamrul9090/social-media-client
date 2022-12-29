import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }
])