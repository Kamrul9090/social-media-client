import Main from "../layout/Main";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
])