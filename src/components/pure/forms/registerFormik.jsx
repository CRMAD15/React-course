import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import *as Yup from 'yup'
import { User } from '../../models/user.class';
import { ROLES } from '../../models/roles.enum';
const RegisterFormik = () => {

    let user = new User()

    const inicialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER

    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin')
                .required(),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password too short')
                .required(),
            confirm: Yup.string()                       //===> es la contraseña que tiene que volver a escribir el usuario
                .when("password", {                     //===> le pasamos el objeto que tiene que comprar Password, y uego un IS que es la condicion o la lógica
                    is: value => (value && value.length > 0 ? true : false), // Es el valor que hemos puesto en la contraseña anterior y comprabamos ese valor
                    then: Yup.string().oneOf(           // Y cuando ya tenemos el valor de confirm vemos si ese valor esta en la lista [ en este caso Yup.ref('password')]
                        [Yup.ref("password")],          // Si no esta dará el mensaje de error
                        '¡Password must match!'
                    )
                }).required('You must to confirm password')

        })



    const submit = (values) => {
        console.log('register users')
    }
    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={inicialValues}
                //****Yup validation Schema ****
                validationSchema={registerSchema}
                /* On submit event */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type='text' name="username" placeholder="Instert you Username" />
                        {/* Username Errors */}

                        {
                            errors.username && touched.username && (
                                <ErrorMessage style={{ color: 'red' }} name='username' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">email</label>
                        <Field id="email" type='email' name="email" placeholder="your email" />
                        {/* Email Errors */}

                        {
                            errors.email && touched.email && (
                                <ErrorMessage style={{ color: 'red' }} name='email' component='div'></ErrorMessage>
                            )
                        }


                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {/* Password Errors */}

                        {
                            errors.password && touched.password && (
                                <ErrorMessage style={{ color: 'red' }} name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Confirm password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />

                        {/* Confirm password Errors */}

                        {
                            errors.confirm && touched.confirm && (
                                <ErrorMessage style={{ color: 'red' }} name='confirm' component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Register</button>

                        {isSubmitting ? (<p>Sending your credentials... </p>) : null}


                    </Form>

                  )
                }



            </Formik>
        </div>
    );
}

export default RegisterFormik;
