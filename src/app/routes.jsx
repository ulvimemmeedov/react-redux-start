import Layout from '../pages/Layout';
import ErrorPage from '../pages/Errors/ErrorPage';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;