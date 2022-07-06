import React from 'react';
import { Navigate } from 'react-router-dom';
// Sirve para redireccionar en base a la condicion  que viene desde la constante por prop
// y se le pasa los children para que actue sobre ellos.
const PublicRutes = ({ children, isLogged }) => {

    return isLogged ? <Navigate to='/profile' /> : children;
}

export default PublicRutes;
