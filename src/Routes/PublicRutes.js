import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Sirve para redireccionar en base a la condicion  que viene desde la constante por prop
// y se le pasa los children para que actue sobre ellos.
const PublicRutes = ({ loggin }) => {

    if (loggin) {

        return <Navigate to='/dashboard' />
    }
    if (!loggin) {

        return <Navigate to='/login' />

    }
    return <Outlet />
}




export default PublicRutes;
