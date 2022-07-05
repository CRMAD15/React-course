import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

    const history = useNavigate()

    const goBack = () => {
        history(-1)
    }
    const navigate = (path) => {
        history(path)
    }
    return (
        <div>
            <h1>Esta es la la pagina de profile</h1>
            <button onClick={goBack}>Go Back</button>
            <button onClick={() => navigate('/task')}>Your taks</button>


        </div>
    );
}

export default ProfilePage;
