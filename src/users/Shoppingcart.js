import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { remove_cart } from '../state-management/actions/userAction'

export const Shoppingcart = () => {
    const users = useSelector(store=>store.userState)
    const dispatch = useDispatch()
    const [local,setlocal] = useState(JSON.parse(localStorage.getItem('user')))
    const user = users.filter(i=>i.userId===local.userId)
    const cart = user[0].cart
  return (
    <>
        {
            local?
            <div>
        <table className='table table-striped table-bordered table-hover mt-3'>
                <thead style={{textAlign: "center"}}>
                <tr>
                    <th className='h5'>Product Type</th>
                    <th className='h5'>Product Name</th>
                    <th className='h5'>Product Price</th>
                    <th className='h5'>Product Picture</th>
                    <th className='h5'>Product Count</th>
                    <td className="h5">جمع کل</td>
                    {/* <th className='h5'>Product Date</th>
                    <th className='h5'>Product Edit</th> */}
                    <th className='h5'>Product Delete</th>
                </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                {
                    cart.length===0?
                    <tr>
                        <p className='h5'>سفارشی اضافه نشده</p>      
                    </tr>
                    :
                    cart.map((item) => (
                        <tr>
                            <td className='h5'>{item.ProductType}</td>
                            <td className='h5'>{item.ProductName}</td>
                            <td className='h5'>{item.ProductPrice}</td>
                            {/* <td className='h5'><img src={item.ProductPicture}/></td> */}
                            <td className='h5'>{item.ProductCount}</td>
                            <td className="h5">{item.productPrice*item.quantity}</td>
                            <td>
                                <button type="button" onClick={r => dispatch(remove_cart(local.userId,item.productId))} className='btn btn-danger'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
    </div>:
    <Navigate to="/form-login-user" replace />
        }
    </>
    
  )
}
