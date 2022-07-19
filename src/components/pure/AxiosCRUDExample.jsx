import React from 'react';
import { createUser, deleteUserById, getAllPageUsers, getAllUsers, getUserById, login, updateUser } from '../../services/axiosCRUD.Service';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'



const AxiosCRUDExample = () => {


    const inicialCredential = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(

        {
            email: Yup.string()
                .email('invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    )

    const authUser = (values) => {
        login(values.email, values.password)
            .then(response => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)

                } else {
                    throw new Error('Login failure')

                }
            })
            .catch(err => {
                alert('Something went wrong:', err)
                sessionStorage.removeItem('token')

            })
            .finally(() => console.log('Finished on one way or the other way'))
    }


    //CRUD examples
    const obtainAllUsers = () => {

        getAllUsers()
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('Users not found')
                }
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }


    const obtainAllUsersPage = (page) => {

        getAllPageUsers(page)
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {

                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('Users not found')
                }
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }


    const obtainUserById = (id) => {

        getUserById(id)
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {

                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then(response => {
                console.log(response.status)
                if (response.status === 201) {

                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }

    const updateUserById = (id, name, job) => {

        updateUser(id, name, job)
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {

                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not found, and not updated')
                }
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }

    const deleteUser = (id) => {

        deleteUserById(id)
            .then(response => {
                console.log(response)
                if (response.status === 204) {

                    alert(`User with Id: ${id}, deleted successfuly`)
                } else {
                    throw new Error('User not found, and not deleted')
                }
            })
            .catch(error => {
                alert(`Something went wrong ${error}`)
            })
    }

    return (
        <div>
            {/* <button onClick={authUser}>
                login
            </button> */}

            <Formik

                //***Data that the form will take */
                initialValues={inicialCredential}
                //****Yup validation Schema ****
                validationSchema={loginSchema}
                /* On submit event */
                onSubmit={async (values) => {

                    authUser(values)
                }}
            >

                {/* We get props from Formik */}

                {
                    props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur
                        } = props
                        return (
                            <Form>
                                <label htmlFor="email">email</label>
                                <Field id="email" name="email" placeholder="your email" />

                                {/* Email errors */}
                                {
                                    errors.email && touched.email && (
                                        <ErrorMessage style={{ color: 'red' }} name='email' component='div'></ErrorMessage>
                                    )
                                }
                                {/* Email password */}
                                {
                                    errors.password && touched.password && (
                                        <div>

                                            <ErrorMessage style={{ color: 'red' }} name='password' component='div'></ErrorMessage>

                                        </div>
                                    )
                                }


                                <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    type="password"

                                />
                                <button type="submit">Login</button>

                                {isSubmitting ? (<p>Login your credentials... </p>) : null}
                            </Form>

                        )
                    }
                }


            </Formik>
            {/* Examplo buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get user by page</button>

                <button onClick={() => obtainAllUsersPage(1)}>Get user by page</button>

                <button onClick={() => obtainUserById(1)}>Get one user</button>

                <button onClick={() => createNewUser('morpheus', 'leader')}>Create new user</button>


                <button onClick={() => updateUserById(1, 'morpheus', 'developer')}>Update user</button>


                <button onClick={() => deleteUser(1)}>Delete user</button>

            </div>

        </div>
    );
}

export default AxiosCRUDExample;
