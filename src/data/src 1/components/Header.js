import React from 'react';
import logo from "../images/logo.png";
import banner from "../images/banner-bg.png"
import toggle_icon from "../images/toggle-icon.png"

export const Header = () => {
  return (
    <div class="banner_bg_main" style={{zIndex:"1"}}>
         <div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Gift Ideas</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="logo_section">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><a href="index.html"><img src={logo}/></a></div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="header_section">
            <div class="container">
               <div class="containt_main">
                  <div id="mySidenav" class="sidenav">
                     <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span class="toggle_icon" onclick="openNav()"><img src={toggle_icon}/></span>
                  <div class="dropdown">
                     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button>
                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </div>
                  <div class="main">
                     
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search this blog"/>
                        <div class="input-group-append">
                           <button class="btn btn-secondary" type="button" style={{backgroundColor: "#f26522", borderColor:"#f26522" }}>
                           <i class="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="header_box">
                     <div class="login_menu">
                        <ul>
                           <li><a href="#">
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></a>
                           </li>
                           <li><a href="#">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="banner_section layout_padding" style={{height:"10svh",zIndex:"2"}}>
            <div class="container" style={{height:"10svh",zIndex:"2"}}>
               <div id="my_slider" class="carousel slide" data-ride="carousel"  style={{height:"10svh",zIndex:"2"}}>
                  <div class="carousel-inner" style={{height:"10svh",zIndex:"2"}}>
                     <div class="carousel-item" style={{height:"10svh",zIndex:"2"}}>
                        <div class="row" style={{height:"10svh",zIndex:"2"}}>
                           <div class="col-sm-12" style={{height:"10svh",zIndex:"2"}}>
                              <h1 class="banner_taital" style={{height:"10svh",zIndex:"2",backgroundColor:"#000"}}>Get Start <br/>Your favriot shoping</h1>
                              <div class="buynow_bt" style={{height:"10svh",zIndex:"2"}}><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}
