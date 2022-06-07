import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from '../component_B/component_B';



const ComponentA = () => {

    const defaultContact = new Contact('Carlos', 'Pérez', 'carlosperes@gmail.com', false)

    return (
        <div>
            <h1>El nuevo contacto es:</h1>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};




export default ComponentA;
