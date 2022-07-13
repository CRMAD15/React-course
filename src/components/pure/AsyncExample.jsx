import React from 'react';

const AsyncExample = () => {


    //Promises
    async function getNumber() {
        return 1;
    }
    function obtainNumber() {
        getNumber()
            .then((response) => alert(`The number obtain is: ${response}`))
            .catch(error => alert('Something goes wrong', error))
    }

    async function generateNumber() {
        return Promise.resolve(2)
    }

    function obtainPromiseNumber() {
        generateNumber()
            .then((response) => alert(`The number obtain is: ${response}`))
            .catch(error => alert('Something goes wrong', error))

    }
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Cristian')
            .then((response) => {
                let value = response
                alert(`Saved Name: ${value}`)
            })
            .catch((error) => alert(`Something goes wrong ${error}`))
            .finally(() => console.log('SUCCES: Name saved and retrieved'))

    }


    //Promisess async await
    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        });

        let message = await promise
        await alert(`Message received: ${message}`)
    }

    // Creando un erro a posta con sincronía
    const returnError = async () => {
        await Promise.reject(new Error('Ooopss'))

    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is ok: ${response}`))
            .catch((error) => alert(`Something goes wrong ${error}`))
            .finally(() => alert(`Finally executed`))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)

        } catch (error) {
            alert(`Something goes wrong with your URL: ${error}, check your console`)

        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(

            [
                fetch('https://reqres.in/api/user'),
                fetch('https://reqres.in/api/user?page=2')

            ]
        ).catch((error) => alert(`Something goes wrong with your URL: ${error}, check your console`))
    }

    return (
        <div>
            <h1>Async Examples</h1>
            <button onClick={obtainNumber}> Obtain number</button>
            <button onClick={obtainPromiseNumber}> Obtain promise number</button>
            <button onClick={showStorage}> Save name and stored</button>
            <button onClick={obtainMessage}> Recieve message in 2 second</button>
            <button onClick={consumeError}> Error message</button>
            <button onClick={urlNotFound}> Request to unknow URL</button>
            <button onClick={multiplePromise}> Multiple Promise</button>


        </div>
    );
}

export default AsyncExample;
