import React, { useState, useRef, useEffect } from 'react';

const Explample2 = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const myRef = useRef();


    const increase1 = () => {
        setCounter1(counter1 + 1)
    }

    const increase2 = () => {
        setCounter2(counter2 + 1)
    }

    // useEffect(() => {
    //     console.log("cambio en el estado del componente")
    //     console.log("monstrando Referencia a elemento del DOM")
    //     console.log(myRef)
    // });

    useEffect(() => {
        console.log("cambio en el estado del contador 1")
        console.log("monstrando Referencia a elemento del DOM")
        console.log(myRef)

    }, [counter1])
    return (
        <div>
            <h1>***Ejemplo de useState() useRef(), useEffect()***</h1>
            <h2>Contador1:{counter1}</h2>
            <h2>Contador2:{counter2}</h2>
            <h4 ref={myRef}>
                Ejemplo de elemento referenciado.
            </h4>
            <div>
                <button onClick={increase1}>Actualizar contador1</button>
                <button onClick={increase2}>Actualizar contador2</button>

            </div>


        </div>
    );
}

export default Explample2;
