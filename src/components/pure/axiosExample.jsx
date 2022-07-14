import React, { useEffect, useState } from 'react';
import { getRandomUser } from "../../services/axiosService";



const AxiosExample = () => {
    const [user, setUser] = useState([]);


    // useEffect(() => {
    //     obtainRandomUser()
    // }, []);


    const obtainRandomUser = () => {
        getRandomUser()

            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results)
                }
                console.log(response)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    console.log(user)
    return (
        <div>
            <h1>Axios Example</h1>
            {
                user.length !== 0 ?
                    user.map(userRandom => {
                        return (
                            < div key={userRandom.login.uuid}>
                                <img src={userRandom.picture.large} alt="" />
                                <h2>{userRandom.name.title} {userRandom.name.first} {userRandom.name.last}</h2>
                                <h3>{userRandom.name.email}</h3>
                            </div>

                        )

                    })



                    : <button onClick={obtainRandomUser}>Create random User</button>
            }

        </div >
    );
}

export default AxiosExample;
