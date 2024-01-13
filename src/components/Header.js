import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const users = useSelector(store=>store.userState)
    const [local,setlocal]=useState(JSON.parse(localStorage.getItem('user')))
    if (local) {
        const user = users.filter(i=>i.userId===local.userId)
        const cart = user[0].cart
        return (
            <div class="banner_bg_main" style={{zIndex: "1"}}>
                <div class="container">
                    <div class="header_section_top">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="custom_menu">
                                    <ul>
                                        <li><NavLink className='h5 a' to="/"> Home </NavLink></li>
                                        <li><NavLink className='h5 a' to="/form-login-user"> login / register </NavLink></li>
                                        <li><NavLink className='h5 a' to="/form-admin"> admin </NavLink></li>
                                        <li>
                                            <NavLink to="/panel-user/shopping-cart" className="bg-white h5 a" style={{borderRadius:'10px',padding:"5px"}}>
                                                <i className="fas fa-shopping-cart" style={{color:'#ffa400'}}></i>
                                                <span className="badge text-black">{cart.length}</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div class="banner_bg_main" style={{zIndex: "1"}}>
                <div class="container">
                    <div class="header_section_top">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="custom_menu">
                                    <ul>
                                        <li><NavLink className='h5 a' to="/"> Home </NavLink></li>
                                        <li><NavLink className='h5 a' to="/form-login-user"> login / register </NavLink></li>
                                        <li><NavLink className='h5 a' to="/form-admin"> admin </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}