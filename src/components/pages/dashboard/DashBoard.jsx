import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../pure/Copyright';
const DashboardPage = () => {
    return (
        <div>
            <Button variant="contained">Hello World</Button>
            <Copyright></Copyright>
            {' '}
            {new Date().getFullYear()}

        </div>
    );
}

export default DashboardPage;
