import React , {useState} from 'react'
import { Field , Form , Formik , ErrorMessage } from 'formik'
import * as Yup from "yup"
import Paneluser from './Paneluser'
const Formregisteruser = ({userloggedin,setuserloggedin,setformregisterusershow , user , setuser , setformloginusershow , panelusershow , setpanelusershow }) => {
    const [error,seterror]=useState("")
  return (
    <>
        {
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
                                        <li><a href="#" className='h5 a' onClick={a=>{setformregisterusershow(false);setformloginusershow(false);}}>Home</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Formik

                        initialValues={
                            {
                                username:"",
                                phonenumber:"",
                                password:"",
                                address:"",
                                postalcode:"",
                            }
                        }
                        validationSchema={
                            Yup.object(
                                {
                                    username:Yup.string()
                                    .required("Required")
                                    .min(2,"minimum caharacter is 2")
                                    .max(15,"maximum character is 15"),
                                    phonenumber:Yup.string()
                                    //.matches(/^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,"phone number is not correct")
                                    .required("Required"),
                                    password:Yup.string()
                                    //.matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
                                    .required("Required"),                  
                                    address:Yup.string()
                                    .required("Required"),
                                    postalcode:Yup.string()
                                    //.matches(/^(?!0)\d(?!([0-9])\1{3})[1-9]{3}[1346-9][013-46-9][1-9](?!\1{8})\d$/,"postalcode is not correct")
                                    .required("Required")
                                }
                            )
                        }
                        onSubmit={
                            (values)=>{
                                if (user.find(a=>a.phonenumber!==values.phonenumber)) {
                                    setuser([...user,values]);
                                    setuserloggedin([values]);
                                    setpanelusershow(true);
                                }if (user.find(a=>a.phonenumber===values.phonenumber)) {
                                    seterror("you have registered yet")
                                }
                            }
                        }
                    >

                        <Form className='mt-5 d-flex justify-content-center flex-column align-items-center'>

                            <label className='h5 mt-2' htmlFor='username'>username</label>

                            <Field className="form-control" name="username" />

                            <p className='d-block text-warning h5'>

                                <ErrorMessage name="username"/>

                            </p>

                            <label className='h5 mt-2' htmlFor='phonenumber'>phonenumber</label>

                            <Field className="form-control" name="phonenumber" />

                            <p className='d-block text-warning h5'>

                                <ErrorMessage name="phonenumber"/>

                            </p>

                            <label className='h5 mt-2' htmlFor='password'>password</label>

                            <Field className="form-control" type="password" name="password" />

                            <p className='d-block text-warning h5'>

                                <ErrorMessage name="password"/>

                            </p>

                            <label className='h5 mt-2' htmlFor='address'>address</label>

                            <Field className="form-control" name="address" />

                            <p className='d-block text-warning h5'>

                                <ErrorMessage name="address"/>

                            </p>

                            <label className='h5 mt-2' htmlFor='postalcode'>postalcode</label>

                            <Field className="form-control" name="postalcode" />

                            <p className='d-block text-warning h5'>

                                <ErrorMessage name="postalcode"/>

                            </p>

                            <p className='d-block text-danger h5'>
                                {error}
                            </p>
                            
                            <button className='btn btn-success mt-3' type='submit'>submit</button>

                        </Form>

                    </Formik>

                    <button onClick={a=>{setformregisterusershow(false);setformloginusershow(true);}} className='btn btn-primary mt-4'>registered before ?</button>

                </div>
        }
    </>
  )
}

export default Formregisteruser
