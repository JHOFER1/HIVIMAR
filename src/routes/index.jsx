import React from "react";
import AuthContextProvider from '../context/authContex';
import PrivateRoute from "./authRoutes/PrivateRoute";
import PublicRoute from "./authRoutes/PublicRoute";
import {
    PRIVATE,
    PERFIL,
    BENEFIT,
    REF,
    HISTORY,
    GOALHISTORY
} from "../config/router/paths";

import Login from '../components/homepages/login/login';
import Home from "../components/homepages/home/home";
import Profile from "../components/categories/profile";
import Refer from "../components/categories/category2";
import Benefit from "../components/categories/category1";
import Awards from "../components/history/goals";
import AwardsHistory from "../components/history/goalsHistory";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]

    },
    {
        path: PRIVATE,
        element: <PrivateRoute />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:PERFIL,
                element:<Profile/>
            },
            {
                path:BENEFIT,
                element:<Refer/>
            },
            {
                path :REF ,
                element:<Benefit/>
            },
            {
                path :HISTORY ,
                element:<Awards/>
            },
            {
                path: GOALHISTORY,
                element:<AwardsHistory/>
            }

        ]

    },
    {
        path: '*',
        element: <>Pagina no disponible</>
    }

]);

export const Routes = () => (
    <>
        <AuthContextProvider >
            <RouterProvider router={router} />
        </AuthContextProvider>
    </>

)