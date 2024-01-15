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
                                    <p class="price_text">Price <span style={{color: "#262626"}}>{item.ProductPrice}</span></p>
                                    <div class="tshirt_img">
                                        <img alt='img' src={item.ProductPicture}/>
                                    </div>
                                    <div class="btn_main">
                                        <div class="buy_bt">
                                            <a className='a' onClick={a=>dispatch(add_cart(item , userId))}>Buy Now</a>
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
                                    <p class="price_text">Price <span style={{color: "#262626"}}>{item.ProductPrice}</span></p>
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




