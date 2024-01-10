import React, {useState} from 'react'
import Tableproducts from './components/Tableproducts';
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';

const Paneladmin = ({
                        setformadminshow,
                        setpaneladminshow,
                        data,
                        setdata,
                        adminname,
                        productitem,
                        setproductitem,
                        editproductshow,
                        seteditproductshow,
                        setaddproductshow,
                        addproductshow
                    }) => {
    const remove = (item) => {
        setdata(data.filter((i) => item.ProductId !== i.ProductId))
    }
    return (
        <div className='d-flex justify-content-center flex-column align-items-center w-75 m-auto'>
            {
                addproductshow ?
                    editproductshow ?
                        null
                        :
                        <Redirect to="/paneladmin/addproduct"/>
                    :
                    editproductshow ?
                        <Redirect to="/paneladmin/editproduct"/>
                        :
                        <Tableproducts productitem={productitem} setproductitem={setproductitem}
                                       seteditproductshow={seteditproductshow} adminname={adminname}
                                       setaddproductshow={setaddproductshow} addproductshow={addproductshow} data={data}
                                       remove={remove}/>
            }
        </div>
    )
}

export default Paneladmin
