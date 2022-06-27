import React from 'react';
import PropTypes from 'prop-types';


const Contact = ({ contact, verifyConnected, remove }) => {

    const isConnected = () => {
        return contact.connected ?
            <i className="bi bi-circle-fill" style={{ color: "green" }} onClick={() => verifyConnected(contact)}></i>
            : <i className="bi bi-circle" style={{ color: "red" }} onClick={() => verifyConnected(contact)}></i>
    }



    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <th>
                <span className='ms-2'>{contact.lastname}</span>
            </th>
            <td className='align-middle'>
                {isConnected()}

            </td>
            <td className='align-middle'>
                <i className='bi-trash' style={{ color: 'tomato', fontSize: 'large' }} onClick={() => remove(contact)} ></i>
            </td>
        </tr >
    )
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    verifyConnected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Contact;
