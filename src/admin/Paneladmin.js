import React, { useState } from 'react'
import Addproduct from './components/Addproduct';
import Tableproducts from './components/Tableproducts';
import Editproduct from './components/Editproduct';

const Paneladmin = ({setformadminshow , setpaneladminshow , data , setdata , adminname }) => {
  const [addproductshow,setaddproductshow]=useState(false)
  const [editproductshow,seteditproductshow]=useState(false)
  const [productitem,setproductitem]=useState([])
  const remove = (item) => {
    setdata( data.filter((i) =>  item.ProductId !==i.ProductId))
  }
  return (
    <div className='d-flex justify-content-center flex-column align-items-center container'>
      <div class="container">
        <div class="header_section_top">
          <div class="row">
            <div class="col-sm-12">
              <div class="custom_menu">
                <ul>
                  <li>
                    <a href="#" className='h5' style={{marginRight:"10px"}} onClick={a=>{setpaneladminshow(false);setformadminshow(false);}}>Home Page</a>
                    {" "}
                    <a href="#" className='h5' style={{marginLeft:"10px"}} onClick={a=>{setpaneladminshow(false);setformadminshow(true);}}>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        addproductshow?
            editproductshow?
              null
            :
              <Addproduct productitem={productitem} setproductitem={setproductitem} setaddproductshow={setaddproductshow} addproductshow={addproductshow} data={data} setdata={setdata}/>
          :
            editproductshow?
              <Editproduct seteditproductshow={seteditproductshow} productitem={productitem} data={data} setdata={setdata}/>
            :
              <Tableproducts productitem={productitem} setproductitem={setproductitem} seteditproductshow={seteditproductshow} adminname={adminname} setaddproductshow={setaddproductshow} addproductshow={addproductshow} data={data} remove={remove}/>
      } 
    </div>
  )
}

export default Paneladmin
