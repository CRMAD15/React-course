import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {


    const [clock, setClock] = useState({
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    });

    const changeEdad = () => {
        let edad = clock.edad + 1
        setClock(
            {
                fecha: new Date(),
                edad,
                nombre: "Martín",
                apellidos: "San José"
            }

        )
    }

    useEffect(() => {
        setTimeout(changeEdad, 1000)
    })

    return (

        <div>
            <h2>
                Hora Actual:
                {clock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clock.nombre} {clock.apellidos}</h3>
            <h1>Edad: {clock.edad}</h1>
        </div>

    );
}

export default Clock;
