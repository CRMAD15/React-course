import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../pure/Copyright';
import { useNavigate } from 'react-router-dom';
const DashboardPage = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }
    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
            {' '}
            {new Date().getFullYear()}

        </div>
    );
}

export default DashboardPage;
