import React, { useState } from 'react'
import { Field , Form , Formik , ErrorMessage } from 'formik'
import * as Yup from "yup"
const Formloginruser = ({ setformloginusershow , user , setuser , setformregisterusershow }) => {
  return (
    <>
        {
            formregisterusershow?
                <Formloginruser/>
            :
                <div className="container d-flex justify-content-center flex-column align-items-center">
                    <div class="container">
                        <div class="header_section_top">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="custom_menu">
                                    <ul>
                                        <li><a href="#" className='h5' onClick={a=>setformloginusershow(false)}>Home</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Formik
            
                        initialValues={
                            {
                                phonenumber:"",
                                password:"",
                            }
                        }
                        validationSchema={
                            Yup.object(
                                {
                                    phonenumber:Yup.string()
                                    //.matches(/^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,"phone number is not correct")
                                    .required("Required"),
                                    password:Yup.string()
                                    //.matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
                                    .required("Required"),                  
                                }
                            )
                        }
                        onSubmit={
                            (values)=>{
                                setuser([...user,values])
                            }
                        }
                    >
            
                        <Form className='mt-5 d-flex justify-content-center flex-column align-items-center'>
            
                            <label className='h5 mt-2' htmlFor='phonenumber'>phonenumber</label>
            
                            <Field className="form-control" id="phonenumber" name="phonenumber" />
            
                            <p className='d-block text-warning h5'>
            
                                <ErrorMessage name="phonenumber"/>
            
                            </p>
            
                            <label className='h5 mt-2' htmlFor='password'>password</label>
            
                            <Field className="form-control" id="password" type="password" name="password" />
            
                            <p className='d-block text-warning h5'>
            
                                <ErrorMessage name="password"/>
            
                            </p>
            
                            <button className='btn btn-success mt-3' type='submit'>submit</button>
            
                        </Form>
            
                    </Formik>
            
                    <button type='button' onClick={a=>{setformregisterusershow(true);}} className='btn btn-primary mt-4'>didn't register yet ?</button>
            
                </div>
        }
    </>
  )
}

export default Formloginruser
