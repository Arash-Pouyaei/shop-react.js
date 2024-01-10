import React, { useState } from 'react'
import { Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from "yup"
import Paneladmin from './Paneladmin'
import { admins } from '../data/data';
import logo from "../images/logo.png";
import banner from "../images/banner-bg.png"
import toggle_icon from "../images/toggle-icon.png"
const Formloginadmin = ({setformadminshow , paneladminshow , setpaneladminshow , setadmin , data , setdata}) => {
    const [adminname,setadminname] = useState("");
  return (
    <>
        
        {
            paneladminshow?
                <Paneladmin adminname={adminname} data={data} setdata={setdata} setformadminshow={setformadminshow} paneladminshow={paneladminshow} setpaneladminshow={setpaneladminshow}/>
            :
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <div class="container">
                        <div class="header_section_top">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="custom_menu">
                                        <ul>
                                            <li>
                                                <a href="#" className='h5 a' onClick={a=>setformadminshow(false)}>Home Page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='h2 my-3'>login admin</p>
                    <Formik 
                        initialValues={{username:"",email:"",password:""}}
                        validationSchema={Yup.object({
                            username: Yup.string()
                            .max(15,"maximum 15 characters")
                            .min(2,"minimum 2 characters")
                            .required("Required"),
                            email: Yup.string()
                            .email("use correct email")
                            .required("Required"),
                            password: Yup.string()
                            .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
                            .required("Required")
                        })}
                        onSubmit={(values, {setSubmitting})=>{
                            setTimeout(()=>{
                                if(admins.find((item)=>item.username===values.username&&item.email===values.email&&item.password===values.password)){
                                    console.log("you are admin")
                                    setadminname(values.username)
                                    setpaneladminshow(true)&&setformadminshow(false)
                                }else if(admins.find((item)=>!item.username===values.username&&!item.email===!values.email&&!item.password===values.password)){
                                    console.log("you are not admin")
                                }
                                setSubmitting(false)
                            },500)
                        }}
                    >
                    <Form className=' d-flex justify-content-center flex-column align-items-center'>
                    
                        <label className='h5' htmlFor='username'>username</label>
                        <Field class="form-control" name="username" type="text"/>

                        <p className='d-block text-warning h5 mt-4'>
                            <ErrorMessage name="username"/>
                        </p>

                        <label className='h5' htmlFor='email'>email</label>
                        <Field class="form-control" name="email" type="email"/>

                        <p className='d-block text-warning h5 mt-4'>
                            <ErrorMessage name="email"/>
                        </p>

                        <label className='h5' htmlFor='password'>password</label>
                        <Field class="form-control" name="password" type="password"/>

                        <p className='d-block text-warning h5 mt-4'>
                            <ErrorMessage name="password"/>
                        </p>

                        <button class="btn btn-success mt-2" type='submit'>submit</button>

                    </Form>
                    </Formik>
                </div>
        }
    </>
  )
}

export default Formloginadmin
