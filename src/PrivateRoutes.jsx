import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    const logged = false
    if (!logged) {

        return (
            < Navigate to="/login" />
        );

    }


    return <Outlet />
}

export default PrivateRoutes;
