import React from 'react';
import { getAllPageUsers, getAllUsers, login } from '../../services/axiosCRUD.Service';
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
                alert(JSON.stringify(response.data.data))
                console.log(response)
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
            })
    }


    const obtainAllUsersPage = (page) => {

        getAllPageUsers(page)
            .then(response => {
                alert(JSON.stringify(response.data.data))
            })
            .catch(error => {
                alert(`Somethingwent wrong ${error}`)
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

            </div>

        </div>
    );
}

export default AxiosCRUDExample;
