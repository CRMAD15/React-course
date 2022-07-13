import React, { useState } from 'react';
import { getNumbers } from '../../services/ObservableService';

const ObservableExamples = () => {

    const [number, setNumber] = useState(0);


    const obtainNewNumbers = () => {

        console.log('Subcription to the observable')

        getNumbers.subscribe(
            {
                next(newNumber) {
                    console.log(`New number:`, newNumber)
                    setNumber(newNumber)
                },
                error(error) {
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in the observable')

                },
                complete() {
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable')

                }
            }

        )

    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Get number</button>
        </div>
    );
}

export default ObservableExamples;
