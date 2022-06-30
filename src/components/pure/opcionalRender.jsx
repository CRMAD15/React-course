import React from 'react';
import { useState } from 'react';


// Login and logout components

const LoginButton = ({ loginAction }) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({ logoutAction }) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
}

const OpcionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);


    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    let opcionalButton;

    // if (access) {
    //     opcionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     opcionalButton = <button onClick={updateAccess}>Login</button>
    // }


    if (access) {
        opcionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    } else {
        opcionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }
    // Unread messaged

    let unReadMessages = () => {
        setNMessages(nMessages + 1)
    }
    return (
        <div>
            {/* Optional Button */}
            {opcionalButton}
            {/* Messages unread */}

            {nMessages > 0 && <p></p>}
        </div>
    );
}

export default OpcionalRender;
