import React from 'react'
import {Product} from './Product'

export const Products = ({data, setdata}) => {
    return (
        <div class="fashion_section">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <h1 class="fashion_taital">men clothes</h1>
                            <div class="fashion_section_2">
                                <div class="row">
                                    <Product data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
