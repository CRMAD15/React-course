import React from 'react';
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h2>Error 404 página no encontrada</h2>
            <button onClick={() => { navigate('/') }}>Go to Home</button>

        </div>
    );
}

export default NotFoundPage;
