import React, { useState } from 'react';

const GreetingStyled = (props) => {
    // Color par usuario logeado
    const loggedStyle = {
        color: 'green'
    }
    // Color par usuario logeado
    const unloggedStyle = {
        color: 'red',
        fontWeight: 'bold'
    }


    const [logged, setLogged] = useState(false)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? <p >Hola, {props.name}</p> : <p >Please login</p>}

            <button onClick={() => {
                console.log('botton pulsado')
                setLogged(!logged)
            }
            }>
                {logged ? 'Logout' : 'Login'}
            </button>

        </div>
    );
}

export default GreetingStyled;
