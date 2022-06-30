import React from 'react';
import { useRef } from 'react';
import { Contact } from '../models/contact.class'
import { useState } from 'react';


const ContactForm = ({ add }) => {
    // const [connectedVerfy, setConnectedVerfy] = useState(true);

    const nameRef = useRef('')
    const lastnameRef = useRef('')
    const emailRef = useRef('')
    const connectedRef = useRef(true)


    const addContact = (e) => {

        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            connectedRef.current.checked
        )
        add(newContact)
    }

    return (

        <form onSubmit={addContact} className='d-flex justify-content-center align-center mb-4'>

            <div className="form-outline flex-fill">
                <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' required autoFocus placeholder='Your name' />
                <input ref={lastnameRef} id='inputlastname' type="text" className='form-control form-control-lg' required placeholder='Your lastname' />
                <input ref={emailRef} id='inputEmail' type="email" className='form-control form-control-lg' required placeholder='You email' />
                <input ref={connectedRef} id='inputConected' type="checkbox" checked={connectedRef} hidden />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'> Add</button>

        </form>
    );
}

export default ContactForm;
