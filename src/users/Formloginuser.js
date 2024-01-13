import React, {useState} from 'react'
import {Field, Form, Formik, ErrorMessage} from 'formik'
import * as Yup from "yup"
import { useSelector } from 'react-redux'
import { useNavigate , Navigate } from 'react-router-dom'


const Formloginruser = () => {
    const [error, seterror] = useState("")
    const users = useSelector(store=>store.userState)
    const navigate=useNavigate()
    const [local,setlocal] = useState(JSON.parse(localStorage.getItem('user'))) 
    return (
        <>
            {
                    local?
                    // redirect("/form-login-user/panel-user")
                    <Navigate to="/panel-user" replace />
                    :
                        <div className="container d-flex justify-content-center flex-column align-items-center">
                            <Formik

                                initialValues={
                                    {
                                        phonenumber: "",
                                        password: "",
                                    }
                                }
                                validationSchema={
                                    Yup.object(
                                        {
                                            phonenumber: Yup.string()
                                                //.matches(/^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,"phone number is not correct")
                                                .required("Required"),
                                            password: Yup.string()
                                                //.matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
                                                .required("Required"),
                                        }
                                    )
                                }
                                onSubmit={
                                    (values) => {
                                        if (users.find(a => a.phonenumber === values.phonenumber && a.password === values.password)) {
                                            localStorage.clear()
                                            localStorage.setItem('user',JSON.stringify(users.find(a => a.phonenumber === values.phonenumber && a.password === values.password)))
                                            navigate('/panel-user',{replace:true})
                                        } else if (users.find(a => a.phonenumber !== values.phonenumber && a.password === values.password)) {
                                            seterror("phone number is not correct")
                                        } else if (users.find(a => a.phonenumber === values.phonenumber && a.password !== values.password)) {
                                            seterror("password is not correct")
                                        } else if (users.find(a => a.phonenumber !== values.phonenumber && a.password !== values.password)) {
                                            seterror("phone number and password is not correct")
                                        }
                                    }
                                }
                            >

                                <Form className='mt-5 d-flex justify-content-center flex-column align-items-center'>

                                    <label className='h5 mt-2' htmlFor='phonenumber'>phonenumber</label>

                                    <Field className="form-control" id="phonenumber" name="phonenumber"/>

                                    <p className='d-block text-warning h5'>

                                        <ErrorMessage name="phonenumber"/>

                                    </p>

                                    <label className='h5 mt-2' htmlFor='password'>password</label>

                                    <Field className="form-control" id="password" type="password" name="password"/>

                                    <p className='d-block text-warning h5'>

                                        <ErrorMessage name="password"/>

                                    </p>

                                    <p className='d-block text-danger h5'>

                                        {error}

                                    </p>

                                    <button className='btn btn-success mt-3' type='submit'>submit</button>

                                </Form>

                            </Formik>

                            <button type='button' onClick={a => navigate('/form-register-user',{replace:true})}
                                    className='btn btn-primary mt-4'>didn't register yet ?
                            </button>

                        </div>
            }
        </>
    )
}

export default Formloginruser
