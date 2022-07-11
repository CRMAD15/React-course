import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({ loggin, children }) => {

    return loggin ? children : <Navigate to='/login' />

}

export default PrivateRoutes;
