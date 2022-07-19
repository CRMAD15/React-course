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
    return axios.post('https://reqres.in/api/login', body)
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

export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)

}
//TODO  Create User
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    //Response the returns a PROMISE
    return axios.post('https://reqres.in/api/users', body)

}
//TODO  Edit User
export const updateUser = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }

    //Response the returns a PROMISE
    return axios.put(`https://reqres.in/api/users/${id}`, body)

}
//TODO  Delete User
export const deleteUserById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)

}