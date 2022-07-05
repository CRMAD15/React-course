import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPages = () => {

    const location = useLocation()
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1)
    }
    const goForward = () => {
        history(+1)
    }
    console.log('estamos en la Ruta', location.pathname)
    return (
        <div>
            <h1>About | FQAs page </h1>
            <button onClick={() => { navigate('/') }}>Go to Home</button>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goForward}>Go Forward</button>

        </div>
    );
}

export default AboutPages;
