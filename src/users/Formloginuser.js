import React, { useState } from 'react'
import { Field , Form , Formik , ErrorMessage } from 'formik'
import * as Yup from "yup"
import Formregisteruser from './Formregisteruser'
import Paneluser from './Paneluser'
const Formloginruser = ({ setformloginusershow , user , setuser , setformregisterusershow , formregisterusershow }) => {
    const [panelusershow,setpanelusershow]=useState(false)
    const [userloggedin,setuserloggedin]=useState([])
    const [error,seterror]=useState("")
  return (
    <>
        {
            formregisterusershow?
                <Formregisteruser userloggedin={userloggedin} setuserloggedin={setuserloggedin} setpanelusershow={setpanelusershow} user={user} panelusershow={panelusershow} setuser={setuser} setformloginusershow={setformloginusershow} setformregisterusershow={setformregisterusershow} formregisterusershow={formregisterusershow}/>
            :   
                panelusershow?
                    <Paneluser userloggedin={userloggedin} setformloginusershow={setformloginusershow} setpanelusershow={setpanelusershow}/>
                :
                    <div className="container d-flex justify-content-center flex-column align-items-center">
                        <div class="container">
                            <div class="header_section_top">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="custom_menu">
                                        <ul>
                                            <li><a href="#" className='h5 a' onClick={a=>setformloginusershow(false)}>Home</a></li>
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
                                    if (user.find(a=>a.phonenumber===values.phonenumber && a.password===values.password)) {
                                        setuserloggedin(user.filter(a => a.phonenumber===values.phonenumber))
                                        console.log(userloggedin)
                                        setpanelusershow(true)
                                    }else if(user.find(a=>a.phonenumber!==values.phonenumber && a.password===values.password)){
                                        seterror("phone number is not correct")
                                    }else if(user.find(a=>a.phonenumber===values.phonenumber && a.password!==values.password)){
                                        seterror("password is not correct")
                                    }else if(user.find(a=>a.phonenumber!==values.phonenumber && a.password!==values.password)){
                                        seterror("phone number and password is not correct")
                                    }
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

                                <p className='d-block text-danger h5'>

                                    {error}

                                </p>
                
                                <button className='btn btn-success mt-3' type='submit'>submit</button>
                
                            </Form>
                
                        </Formik>
                
                        <button type='button' onClick={a=>setformregisterusershow(true)} className='btn btn-primary mt-4'>didn't register yet ?</button>
                
                    </div>
        }
    </>
  )
}

export default Formloginruser
