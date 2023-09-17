import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../../config/router/paths';
import { useAuthContext } from '../../context/authContex';
import { Footer } from '../../components/common/footer';
import { Header } from '../../components/common/header';

export default function PrivateRoute() {
    const { isAuthenticated, role } = useAuthContext();

    if (isAuthenticated && role === 'client') {
        return (
            <div className='flex flex-col min-h-screen'>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        );
    }
    else {
        return <Navigate to='/' />;
    }

}
