import React from 'react'

import {Footer} from './components/Footer'

import {Products} from './components/Products'


export const Landingpage = ({data}) => {


    return (

        <>
            <Products data={data}/>
            < Footer/>
        </>

    )

}