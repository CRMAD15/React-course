import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({ contact }) => {
    console.log(contact)
    return (
        <div>
            <h3>
                Nombre:{contact.name}
            </h3>
            <h3>
                Apellido:{contact.lastname}
            </h3>
            <h3>
                Email:{contact.email}
            </h3>
            <h3>
                {contact.conected ? "Contacto en línea" : "Contacto No Disponible"}
            </h3>




        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;
