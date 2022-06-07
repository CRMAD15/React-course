import React, { useState } from 'react';

const Example1 = () => {

    const startValue = 0;

    const personData = {
        name: 'Cristian',
        email: 'cristian@gmial.com'
    }


    const [counter, setCounter] = useState(startValue);
    const [person, setPerson] = useState(personData);

    const counterIncrease = () => {
        setCounter(counter + 1)
    }
    const updatePerson = () => {
        setPerson(
            {
                name: 'Pepe',
                email: ' pepe@gmail.com'
            }
        )
    }
    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador:{counter}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre:{person.name}</h3>
            <h4>Email: {person.email}</h4>
            <button onClick={counterIncrease}>Actualizar contador</button>
            <button onClick={updatePerson}> Actualizar persona</button>
        </div>
    );
}

export default Example1;
