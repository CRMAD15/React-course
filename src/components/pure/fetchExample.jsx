import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllPagedUsers, getAllUsers, getUsersDetails, login } from '../../services/fetchService';
const FetchExample = () => {


    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null)

    const [totalUsers, setTotalUsers] = useState(12)
    const [pages, setPages] = useState(2);
    const [userPerPage, setUserPerPage] = useState(6)

    useEffect(() => {

        obtainUsers()
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then(response => {
                console.log(`All users: ${response.data}`)
                setUsers(response.data)
                setTotalUsers(response.total)
                setPages(response.page)
                setUserPerPage(response.per_page)

            })
            .catch(error =>
                alert(`Error while retrieving users: ${error}`))
            .finally(() => {
                console.log(`Ended obtaining users`);
                console.table(users)
            })
    }

    const obtainPageUsers = (pages) => {
        getAllPagedUsers(pages)
            .then(response => {
                console.log(`All paged users: ${response.data}`)
                setUsers(response.data)
                setTotalUsers(response.total)
                setPages(response.page)
                setUserPerPage(response.per_page)

            })
            .catch(error =>
                alert(`Error while retrieving users: ${error}`))
            .finally(() => {
                console.log(`Ended obtaining users`);
                console.table(users)
            })
    }
    const obtainUserDetails = (id) => {
        getUsersDetails(id)
            .then(response => {
                console.log(`All paged user: ${response.data}`)
                setSelectedUser(response.data)

            })
            .catch(error =>
                alert(`Error while retrieving user: ${error}`))
            .finally(() => {
                console.log(`Ended obtaining user`);
                console.table(selectedUser)
            })
    }

    const loginAuth = () => {
        login("eve.holt@reqres.in", "cityslicka")
            .then(response => {
                console.log(`token: ${response.token}`)
                sessionStorage.setItem('token', response.token)
            })
            .catch(error =>
                alert(`Error while retrieving user: ${error}`))
            .finally(() => {
                console.log(`Ended login User. Redirecting to home`);
            })

    }

    return (
        <div>
            {/* Simulation login */}
            <button onClick={loginAuth}>Login</button>


            <h2>Users:</h2>


            {
                users.map(((user, index) => {
                    return (

                        <p key={index} onClick={() => obtainUserDetails(user.id)}>
                            {user.first_name} {user.last_name}
                        </p>
                    )

                }


                ))
            }



            <p>Showing{userPerPage} user of {totalUsers}</p>
            <button onClick={() => obtainPageUsers(1)}>1</button>
            <button onClick={() => obtainPageUsers(2)}>2</button>

            <div>

                {
                    selectedUser != null ?

                        <div>
                            <h3>User Details</h3>
                            <p>Name:{selectedUser.first_name}</p>
                            <p>Lastname:{selectedUser.last_name}</p>
                            <p>Email:{selectedUser.email}</p>
                            <img src={selectedUser.avatar} alt='avatar' style={{ height: '150px', width: '150px' }} />
                        </div>

                        :
                        <h6>Please click on a User to see Its details</h6>
                }
            </div>


        </div >
    );
}

export default FetchExample;
