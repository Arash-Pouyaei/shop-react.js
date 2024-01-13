import React, { useState } from 'react'
import { Navigate , useNavigate , NavLink } from 'react-router-dom'

const Paneluser = () => {
    const [local,setlocal] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate = useNavigate()
    return (
        <>
            {
                local?
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '18.9%',
                    zIndex: '0',
                    height: '100vh',
                    top: '0',
                    position: 'fixed',
                    float: 'right',
                    right: '0',
                    backgroundColor:'#ffa400'
                }}>
                    <p className='h3 text-white mt-5'>welcome {" "}
                        {local.username}</p>
                    <ul className='list-group' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        listStyle: 'none'
                    }}>

                        <li className='text-center mt-5'>
                            <a className='mx-2' href='#rftnj'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                                    <path fill="#ffffff"
                                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                            </a>
                            <a className='mx-2' onClick={a=>{localStorage.clear();navigate('/form-login-user',{replace:true});}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
                                    <path fill="#ff0000" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                                </svg>
                            </a>
                        </li>
                        <li className='text-center' style={{marginTop:"250px"}}>
                            <NavLink to="/panel-user/shopping-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
                                    <path fill="#ffffff"
                                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                </svg>
                            </NavLink>
                        </li>

                        <li className='mt-4'>
                            <a href='#dolifgjrv' style={{textDecoration: 'none', color: 'white'}} className='h5'>resently buyed</a>
                        </li>

                    </ul>
                </div>
                    
            </div>
            :
            <Navigate to="/form-register-user" replace/>
            }
        </>
    )
}

export default Paneluser
