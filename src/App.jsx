import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from './pages/Layout';
import ErrorPage from './pages/Errors/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
