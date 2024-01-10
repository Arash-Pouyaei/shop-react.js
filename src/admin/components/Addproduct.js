import React, { useState } from 'react'
import { Formik , Field , Form , ErrorMessage} from 'formik'
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup"
const Addproduct = ({addproductshow , setaddproductshow , data , setdata}) => {
  return (
    <>
        <Formik 
            initialValues={
                {
                    ProductId:uuidv4(),
                    ProductType:"",
                    ProductName:"",
                    ProductPrice:"",
                    ProductPicture:"",
                    ProductCount:"",
                }
            }
            validationSchema={Yup.object({
                ProductType:Yup.string()
                .max(30,"maximum 30 characters")
                .min(2,"minimum 2 characters")
                .required("Required"),
                ProductName:Yup.string()
                .max(30,"maximum 30 characters")
                .min(2,"minimum 2 characters")
                .required("Required"),
                ProductPrice:Yup.string()
                .max(9,"maximum price 100000000")
                .min(4,"minimum price 1000")
                .required("Required"),
                ProductPicture:Yup.string()
                .required("Required"),
                ProductCount:Yup.string()
                .min(0,"minimum atleast 1")
                .required("Required"),
            })}
            onSubmit={(values,{resetForm})=>{
                setdata([...data , values])
                resetForm()
                values.ProductId=uuidv4()
                setaddproductshow(!addproductshow)
            }}
        >
            <Form className='mt-3 d-flex justify-content-center flex-column align-items-center'>
                
                    <label className='h5 mt-2' htmlFor='Product Type'>Product Type</label>
                    <Field style={{textAlign:"center"}} class="form-control"name="ProductType" type="text"/>
                    <p className='d-block text-warning h5'>
                        <ErrorMessage name="ProductType"/>
                    </p>
                
                    <label className='h5 mt-2' htmlFor='Product Name'>Product Name</label>
                    <Field style={{textAlign:"center"}} class="form-control" name="ProductName" type="text"/>
                    <p className='d-block text-warning h5'>
                        <ErrorMessage name="ProductName"/>
                    </p>
               
                    <label className='h5 mt-2' htmlFor='Product Price'>Product Price</label>
                    <Field style={{textAlign:"center"}} class="form-control" name="ProductPrice" type="text"/>
                    <p className='d-block text-warning h5'>
                        <ErrorMessage name="ProductPrice"/>
                    </p>
                
                    <label className='h5 mt-2' htmlFor='Product Picture'>Product Picture</label>
                    <Field style={{textAlign:"center"}} class="form-control" name="ProductPicture" type="file"/>
                    <p className='d-block text-warning h5'>
                        <ErrorMessage name="ProductPicture"/>
                    </p>
                
                    <label className='h5 mt-2' htmlFor='Product Count'>Product Count</label>
                    <Field style={{textAlign:"center"}} class="form-control" name="ProductCount" type="text"/>
                    <p className='d-block text-warning h5'>
                        <ErrorMessage name="ProductCount"/>
                    </p>
                
                <button class="btn btn-success mt-2 col-12" type='submit'>add</button>
                <br/>
            </Form>
        </Formik>
        <button  onClick={a=>setaddproductshow(!addproductshow)} class="btn btn-danger mt-2 col-2">don't add</button>
    </>
  )
}

export default Addproduct
