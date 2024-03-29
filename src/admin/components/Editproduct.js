import React ,{useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { edit_product } from '../../state-management/actions/ProductAction'
import { Navigate , redirect } from 'react-router-dom'

const Editproduct = ({ setproductitem, productitem}) => {
const dispatch=useDispatch()
const [local,setlocal]=useState(JSON.parse(localStorage.getItem('admin')))
    return (
        <>
            {
                local?
                <div className='d-flex justify-content-center flex-column align-items-center w-75 m-auto'>
            {
                productitem.map((i) => (
                    <>
                        <Formik
                            initialValues={
                                {
                                    ProductId: i.ProductId,
                                    ProductType: "",
                                    ProductName: "",
                                    ProductPrice: "",
                                    ProductPicture: "",
                                    ProductCount: "",
                                }
                            }
                            validationSchema={Yup.object({
                                ProductType: Yup.string()
                                    .max(30, "maximum 30 characters")
                                    .min(2, "minimum 2 characters")
                                    .required("Required"),
                                ProductName: Yup.string()
                                    .max(30, "maximum 30 characters")
                                    .min(2, "minimum 2 characters")
                                    .required("Required"),
                                ProductPrice: Yup.string()
                                    .max(9, "maximum price 100000000")
                                    .min(4, "minimum price 1000")
                                    .required("Required"),
                                ProductPicture: Yup.string()
                                    .required("Required"),
                                ProductCount: Yup.string()
                                    .min(0, "minimum atleast 1")
                                    .required("Required"),
                            })}
                            onSubmit={(values) => {
                                dispatch(edit_product(values,i))
                                redirect('/form-admin/panel-admin')
                            }}
                        >
                            <Form className='mt-3 d-flex justify-content-center flex-column'>
                                <div>
                                    <Field style={{textAlign: "center"}} class="form-control align-right"
                                           placeholder={i.ProductType} name="ProductType" type="text"/>
                                    <p className='d-block text-warning h5 mt-4'>
                                        <ErrorMessage name="ProductType"/>
                                    </p>
                                </div>
                                <div>
                                    <Field style={{textAlign: "center"}} class="form-control"
                                           placeholder={i.ProductName} name="ProductName" type="text"/>
                                    <p className='d-block text-warning h5 mt-4'>
                                        <ErrorMessage name="ProductName"/>
                                    </p>
                                </div>
                                <div>
                                    <Field style={{textAlign: "center"}} class="form-control"
                                           placeholder={i.ProductPrice} name="ProductPrice" type="text"/>
                                    <p className='d-block text-warning h5 mt-4'>
                                        <ErrorMessage name="ProductPrice"/>
                                    </p>
                                </div>
                                <div>
                                    <Field style={{textAlign: "center"}} class="form-control"
                                           placeholder={i.ProductPicture} name="ProductPicture" type="text"/>
                                    <p className='d-block text-warning h5 mt-4'>
                                        <ErrorMessage name="ProductPicture"/>
                                    </p>
                                </div>
                                <div>
                                    <Field style={{textAlign: "center"}} class="form-control"
                                           placeholder={i.ProductCount} name="ProductCount" type="text"/>
                                    <p className='d-block text-warning h5 mt-4'>
                                        <ErrorMessage name="ProductCount"/>
                                    </p>
                                </div>
                                <button class="btn btn-success mt-2 col-12" type='submit'>edit</button>
                                <br/>
                            </Form>
                        </Formik>
                    </>
                ))
            }
            <button className='btn btn-danger' onClick={a => redirect('/form-admin/panel-admin')}>don't edit</button>
        </div>
        :<Navigate to="form-admin" replace/>
            }
        </>
    )
}

export default Editproduct
