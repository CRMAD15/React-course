import axios from 'axios'

/**
 * login method to req res endpoint
 * @param {String} email 
 * @param {String} password 
 */
export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //Response the returns a PROMISE
    return axios.post('https://reqres.in/api/users', body)
}

//  Obtain all user

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')

}
//  Obtain all user by Page

export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)

}
//TODO  Obtain User by Id
//TODO  Create User
//TODO  Edit User
//TODO  Delete User
