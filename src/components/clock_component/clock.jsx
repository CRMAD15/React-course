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

    const firstColor = {
        color: 'green'
    }
    const secondColor = {
        color: 'tomato'
    }
    const [color, setColor] = useState(true);

    const changeColor = () => {
        if (color) {
            setColor(false)
        } else {
            setColor(true)

        }

    }
    useEffect(() => {
        setTimeout(() => {
            changeEdad()
            changeColor()
        }, 1000)
    }, [clock])

    return (

        <div>
            <h1 style={color ? firstColor : secondColor}>Change Color</h1>
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
