import React from 'react';
import logo from "../images/logo.png";
import toggle_icon from "../images/toggle-icon.png"
import {NavLink} from 'react-router-dom';

export const Header = ({setformadminshow, setformloginusershow}) => {
    return (
        <div class="banner_bg_main" style={{zIndex: "1"}}>
            <div class="container">
                <div class="header_section_top">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="custom_menu">
                                <ul>
                                    <li><NavLink className='h5 a' to="/"> Home </NavLink></li>
                                    <li><NavLink className='h5 a' to="/formuser"> login / register </NavLink></li>
                                    <li><NavLink className='h5 a' to="/formadmin"> admin </NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}