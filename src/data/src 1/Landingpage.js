import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'

export const Landingpage = ({data}) => {
  return (
   <>
      <Header/>
      <Products data={data}/>
      <Footer/>
   </>
  )
}