import React, { useState, useContext } from 'react';

//Inicializado null que se rellena con los datos del padre y crea el context llamado myContext
const myContext = React.createContext(null)

const Component1 = () => {

    //Usamos el contexto para que pueda usarse por en diferentes componentes donde desde el padre se le envía la info a los hijos
    const state = useContext(myContext)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/*pintamos el segundo componente.Esto es solo de prueba ya que podrías haberlo hecho en un solo componente*/}
            <Componet2></Componet2>
        </div>
    );
}


const Componet2 = () => {
    //Volvemos a usar el contexto para usar la info dels mismo en otro nuevo componente 
    const state = useContext(myContext)
    return (
        <div>
            <h2>
                La sesion es: {state.session}
            </h2>

        </div>
    );
}



//OJO esta exportación no funciona con funciones de tipo flecha
export default function MyContextComponent() {

    //  La info que queremos enviar
    const inicialState = {
        token: '1234567',
        session: 1
    }
    //Creamos el estado de este componente que es el padre
    const [sessionData, setSessionData] = useState(inicialState)
    // Función que actualiza el estado
    const updateSession = () => {
        setSessionData({
            token: "JWT123456",
            session: sessionData.session + 1
        })

    }

    return (
        <div>
            <myContext.Provider value={sessionData}>
                {/*Todo lo que este aqui dentro puedo leer los datos de sessionData */}
                {/*Además si se actualiza los componentes de aquí tambien se actializan */}
                <Component1></Component1>
                <button onClick={updateSession}>Actualizar</button>

            </myContext.Provider>

        </div>
    );
}





