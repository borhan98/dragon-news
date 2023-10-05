import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NewsDetails from "../../Pages/NewsDetails/NewsDetails";
import Register from "../../Pages/Register/Register";
import Root from "../../layout/Root";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../../../public/news.json')
            },
            {
                path: "/newsDetail/:id",
                element: <PrivateRoute><NewsDetails /></PrivateRoute>,
                loader: () => fetch('../../../public/news.json')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]

export default routes;