import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hola {props.name}</h1>
            <p>Tu edad es {age}</p>
            <button onClick={birthday}> Suma un año</button>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
