import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { add_product } from '../../state-management/actions/ProductAction';
import { Navigate , redirect } from 'react-router-dom';
const Addproduct = ({addproductshow, setaddproductshow, data, setdata}) => {
const dispatch = useDispatch()
const [local,setlocal]=useState(JSON.parse(localStorage.getItem('admin')))
    return (
        <>{local?
            <div className='d-flex justify-content-center flex-column align-items-center w-75 m-auto'>
                <Formik
                    initialValues={
                        {
                            ProductId: uuidv4(),
                            ProductType: "",
                            ProductName: "",
                            ProductPrice: "",
                            ProductPicture: "",
                            ProductCount: "",
                            ProductDate: new Date()
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
                    onSubmit={(values, {resetForm}) => {
                        dispatch(add_product(values))
                        resetForm()
                        values.ProductId = uuidv4()
                        setaddproductshow(!addproductshow)
                    }}
                >
                    <Form className='mt-3 d-flex justify-content-center flex-column align-items-center'>

                        <label className='h5 mt-2' htmlFor='Product Type'>Product Type</label>
                        <Field style={{textAlign: "center"}} class="form-control" name="ProductType" type="text"/>
                        <p className='d-block text-warning h5'>
                            <ErrorMessage name="ProductType"/>
                        </p>

                        <label className='h5 mt-2' htmlFor='Product Name'>Product Name</label>
                        <Field style={{textAlign: "center"}} class="form-control" name="ProductName" type="text"/>
                        <p className='d-block text-warning h5'>
                            <ErrorMessage name="ProductName"/>
                        </p>

                        <label className='h5 mt-2' htmlFor='Product Price'>Product Price</label>
                        <Field style={{textAlign: "center"}} class="form-control" name="ProductPrice" type="text"/>
                        <p className='d-block text-warning h5'>
                            <ErrorMessage name="ProductPrice"/>
                        </p>

                        <label className='h5 mt-2' htmlFor='Product Picture'>Product Picture</label>
                        <Field style={{textAlign: "center"}} class="form-control" name="ProductPicture" type="file"/>
                        <p className='d-block text-warning h5'>
                            <ErrorMessage name="ProductPicture"/>
                        </p>

                        <label className='h5 mt-2' htmlFor='Product Count'>Product Count</label>
                        <Field style={{textAlign: "center"}} class="form-control" name="ProductCount" type="text"/>
                        <p className='d-block text-warning h5'>
                            <ErrorMessage name="ProductCount"/>
                        </p>

                        <button class="btn btn-success mt-2 col-12" type='submit'>add</button>
                        <br/>
                    </Form>
                </Formik>
                <button onClick={a => redirect('/form-admin/panel-admin') } class="btn btn-danger mt-2 col-2">don't add
                </button>
            </div>:            <Navigate to="/form-admin" replace />}</>
    )
}

export default Addproduct
