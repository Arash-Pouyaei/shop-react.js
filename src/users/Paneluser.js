import React from 'react'
import { Sidebar , Menu , SubMenu , MenuItem } from 'react-pro-sidebar';
const Paneluser = ({setpanelusershow,setformloginusershow}) => {
  return (
    <>  
        <div class="container">
            <div class="header_section_top">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="custom_menu">
                        <ul>
                            <li><a className='h5' href="#" onClick={a=>{setpanelusershow(false);setformloginusershow(false)}}>Home</a></li>
                            <li><a className='h5' href="#" onClick={a=>{setpanelusershow(false);}}>log out</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex'>
            <Sidebar>
                <Menu
                    menuItemStyles={{
                        button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                        },
                    }}
                >
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    </>
  )
}

export default Paneluser
