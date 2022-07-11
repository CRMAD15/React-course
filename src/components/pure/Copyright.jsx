import React from 'react';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copiright(C)'}
            <Link color='inherit' href='https://imaginaformacion.com'>
                Imagina Formación
            </Link>
        </Typography>
    );
}

export default Copyright;
