import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

const SquareColor = () => {

    let red = 0
    let green = 0
    let blue = 0
    const [color1, setColor1] = useState(`rgb(${red},${green},${blue})`)
    const [isChanging, setIsChanging] = useState(false)


    const changeColor = () => {
        red = Math.round(Math.random() * 255)
        green = Math.round(Math.random() * 255)
        blue = Math.round(Math.random() * 255)
        let newColors = `rgb(${red},${green},${blue})`
        setColor1(newColors)
    }

    let interval = useRef()

    useEffect(() => {
        if (isChanging) {
            interval.current = setInterval(() => changeColor(), 500)
            console.log('soy verdader no debo cambiar de color')

        } else {
            mouseOut()
            console.log('soy falso tengo que pararme')

        }

    }, [isChanging])


    const mouseOver = () => {
        setIsChanging(true)
    }


    const mouseOut = () => {
        setIsChanging(false)
        clearInterval(interval.current)
    }


    return (
        <>
            <div style={{ height: '255px', width: '255px', background: color1, color: 'tomato' }}
                onMouseEnter={mouseOver}
                onMouseLeave={mouseOut}
                onDoubleClick={mouseOut} >
                <p>{color1}</p>
            </div>


        </>

    );
}

export default SquareColor;
