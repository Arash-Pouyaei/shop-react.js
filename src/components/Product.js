import React from 'react'

export const Product = ({data}) => {
    return (
        <>
            {
                data.map((item) => (
                        <div class="col-lg-4 col-sm-4">
                            <div class="box_main">
                                <h4 class="shirt_text">{item.ProductName}</h4>
                                <p class="price_text">Price <span style={{color: "#262626"}}>{item.ProductPrice}</span></p>
                                <div class="tshirt_img"><img alt='img' src={item.ProductPicture}/></div>
                                <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}
