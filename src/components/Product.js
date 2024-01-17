import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { add_cart } from '../state-management/actions/userAction'
export const Product = () => {
    const products = useSelector(store=>store.productState)
    const local = JSON.parse(localStorage.getItem('user'))
    const users = useSelector(store=>store.userState)
    const dispatch = useDispatch()
    if (local) {
        const user = users.filter(i=>i.userId===local.userId)
        const userId = user[0].userId
        return(
            <>
                {
                    products.map((item) => (
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">{item.ProductName}</h4>
                                    <p class="price_text h6">Price: {
                            item.ProductOff===0?
                            <h6>{item.ProductPrice}</h6>
                            :
                            <><h6>{Math.round(item.ProductPrice-item.ProductPrice*item.ProductOff/100)}</h6><h6 class="text-muted ml-2"><del>{item.ProductPrice}</del></h6></>
                          }</p>
                                    <div class="tshirt_img">
                                        <img alt='img' src={item.ProductPicture}/>
                                    </div>
                                    <div class="btn_main">
                                        <div class="buy_bt">
                                            <a className='a' onClick={a=>{user[0].cart.find(i=>i.ProductId===item.ProductId)?alert("this product was resently added to cart"):dispatch(add_cart(item , userId))}}>Buy Now</a>
                                        </div>
                                        <div class="seemore_bt">
                                            <a href="#aegr">See More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </>
        )
    }else{
        return(
            <>
                {
                    products.map((item) => (
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">{item.ProductName}</h4>
                                    <p class="price_text h6">Price: {
                            item.ProductOff===0?
                            <h6>{item.ProductPrice}</h6>
                            :
                            <><h6>{Math.round(item.ProductPrice-item.ProductPrice*item.ProductOff/100)}</h6><h6 class="text-muted ml-2"><del>{item.ProductPrice}</del></h6></>
                          }</p>
                                    <div class="tshirt_img">
                                        <img alt='img' src={item.ProductPicture}/>
                                    </div>
                                    <div class="btn_main">
                                        <div class="buy_bt">
                                            <NavLink className="a" to={"/form-login-user"}>Please Login</NavLink>
                                        </div>
                                        <div class="seemore_bt">
                                            <a href="#aegr">See More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </>
        )
    }
}




