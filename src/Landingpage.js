import React, { useState } from 'react'

import { Footer } from './components/Footer'

import { Header } from './components/Header'

import { Products } from './components/Products'

import Formloginadmin from './admin/Formloginadmin'

import Formloginuser from './users/Formloginuser'

import Formregisteruser from './users/Formregisteruser'

export const Landingpage = ({ data , setdata , admin , user , setuser }) => {

  const [formadminshow,setformadminshow]=useState(false)
  
  const [paneladminshow,setpaneladminshow]=useState(false)

  const [formloginusershow,setformloginusershow]=useState(false)

  const [formregisterusershow,setformregisterusershow]=useState(false)

  return (

   <>

      {

        formadminshow? 

          formloginusershow?

            null

          :

            <Formloginadmin data={data} setdata={setdata} formadminshow={formadminshow} setformadminshow={setformadminshow} admin={admin} paneladminshow={paneladminshow} setpaneladminshow={setpaneladminshow}/>
        
        :
          
          formloginusershow?

            <Formloginuser user={user} setuser={setuser} setformloginusershow={setformloginusershow} setformregisterusershow={setformregisterusershow} formregisterusershow={formregisterusershow} />

          :

            <>

              <Header formadminshow={formadminshow} setformadminshow={setformadminshow} setformloginusershow={setformloginusershow}/>

              <Products data={data}/>

              <Footer/>

            </>

      }

   </>

  )

}