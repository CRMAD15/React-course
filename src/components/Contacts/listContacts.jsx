import React, { useState } from 'react';
import { useEffect } from 'react';
import Contact from './contact';
import ContactForm from './contactForm';
import Contacts from "./ContactList.json";

const ListContacts = () => {
    const [contacts, setContacts] = useState(Contacts);
    // useEffect(() => {
    //     console.log('elemto montado')
    //     return () => {
    //         console.log('elemto eliminado')

    //     };
    // }, [contacts]);


    const userConnected = (contact) => {
        console.log('cambiando el estado del usuario', contact)
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].connected = !tempContact[index].connected
        setContacts(tempContact)
    }
    const deleteContact = (contact) => {
        console.log('Eleminado del usuario', contact)
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)
        setContacts(tempContact)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contact List: </h5>
                    </div>
                    <div className='card-body' dat-mdb-perfect-scrollbar='true' style={{ positio: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Lastname</th>
                                    <th scope='col'>Online</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        return (
                                            <Contact
                                                key={index}
                                                contact={contact}
                                                verifyConnected={userConnected}
                                                remove={deleteContact}
                                            />
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
            <ContactForm
                add={addContact}
            />
        </div>
    );
}

export default ListContacts;
