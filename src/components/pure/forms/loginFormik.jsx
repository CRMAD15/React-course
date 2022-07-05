import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(

    {
        email: Yup.string()
            .email('invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)

const LoginFormik = () => {
    const inicialCredential = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login form</h4>
            <Formik

                //***Data that the form will take */
                initialValues={inicialCredential}
                //****Yup validation Schema ****
                validationSchema={loginSchema}
                /* On submit event */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                    // We save User info
                    localStorage.setItem('credential', values)

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
        </div>

    );
}

export default LoginFormik;
