import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isLogged, children }) => {
    return (
        <>
            {
                (isLogged ? <Navigate to='/profile' /> : <Navigate to='/home' />)
            }
            {
                (isLogged ? children : <Navigate to='/home' />)
            }
        </>
    );
}

export default PrivateRoutes;
