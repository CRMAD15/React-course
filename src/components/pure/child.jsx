import React from 'react';
import { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('Nombre de referencia')


    const pressButton = () => {
        let text = messageRef.current.value
        alert(`Text default: ${text}`)

    }

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`)
    }


    const submitForm = (e) => {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('on mouseOver working')} >Welcome {name}</p>
            <button onClick={() => console.log('Pressed Button1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input
                placeholder='Send text to your father'
                onFocus={() => console.log('input Focus')}
                onChange={(e) => console.log('input chaged:', e.target.value)}
                onCopy={() => console.log('input on copy')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitForm}>
                    <input
                        placeholder='New Name'
                        ref={nameRef}
                    />
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
