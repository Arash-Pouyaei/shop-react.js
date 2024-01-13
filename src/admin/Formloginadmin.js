import React, { useState } from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from "yup"
import { useSelector , useDispatch } from 'react-redux';
import { Navigate , useNavigate } from "react-router-dom";
const Formloginadmin = () => {
    const admins=useSelector(store=>store.adminState)
    const [local,setlocal] = useState(JSON.parse(localStorage.getItem('admin')))
    const navigate = useNavigate()
    return (
    <>
                   {local? 
                   <Navigate to="/form-admin/panel-admin" replace />
                   :
                   <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
                        <Formik
                            initialValues={
                                {username: "", email: "", password: ""}
                            }
                            validationSchema={
                                Yup.object({
                                    username: Yup.string()
                                        .max(15, "maximum 15 characters")
                                        .min(2, "minimum 2 characters")
                                        .required("Required"),
                                    email: Yup.string()
                                        .email("use correct email")
                                        .required("Required"),
                                    password: Yup.string()
                                        .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                        .required("Required")
                                })
                            }
                            onSubmit={
                                (values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        if (admins.find((item) => item.username === values.username && item.email === values.email && item.password === values.password)) {
                                            localStorage.setItem('admin',JSON.stringify(values));
                                            navigate("/form-admin/panel-admin",{replace:true});
                                        } else if (admins.find((item) => !item.username === values.username && !item.email === !values.email && !item.password === values.password)) {
                                            console.log("you are not admin")
                                        }
                                        setSubmitting(false)
                                    }, 500)
                                }
                            }>
                            <Form className=' d-flex justify-content-center flex-column align-items-center'>
                                <label className='h5' htmlFor='username'> username </label>
                                <Field class="form-control" name="username" type="text"/>
                                <p className='d-block text-warning h5 mt-4'>
                                    <ErrorMessage name="username"/>
                                </p>

                                <label className='h5' htmlFor='email'> email </label>
                                <Field class="form-control" name="email" type="email"/>

                                <p className='d-block text-warning h5 mt-4'>
                                    <ErrorMessage name="email"/>
                                </p>

                                <label className='h5' htmlFor='password'> password </label>
                                <Field class="form-control" name="password" type="password"/>

                                <p className='d-block text-warning h5 mt-4'>
                                    <ErrorMessage name="password"/>
                                </p>

                                <button class="btn btn-success mt-2" type='submit'> submit</button>

                            </Form>
                        </Formik>
                    </div>
                    }
            
        </>
    )
}

export default Formloginadmin