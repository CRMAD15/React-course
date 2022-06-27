import React from 'react';
import { useState } from 'react';
import Child from '../pure/child';

const Father = () => {


    const [name, setName] = useState('Cristian');
    const showMessage = (text) => {
        alert(`Message recieved: ${text} `)
    }
    const updateName = (newName) => {
        setName(newName)
    }

    return (
        <div>
            <Child
                name={name}
                send={showMessage}
                update={updateName} />
        </div>
    );
}

export default Father;
