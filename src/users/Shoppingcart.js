import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { dec_cart_qty, inc_cart_qty, remove_cart } from '../state-management/actions/userAction';
import { dec_products_qty, inc_products_qty } from '../state-management/actions/ProductAction';

export const Shoppingcart = () => {
  const users = useSelector((store) => store.userState);
  const dispatch = useDispatch();
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem('user')));

  if (local) {
    const user = users.filter((i) => i.userId === local.userId);
    const cart = user[0].cart;

    const overallTotal = cart.reduce((acc, item) => {
      return acc + (item.ProductOff === 0 ? item.ProductPrice * item.User_ProductCount : Math.round(item.User_ProductCount * item.ProductPrice - (item.ProductPrice * item.ProductOff) / 100));
    }, 0);

    return (
      <>
        <div>
          <table className='table table-striped table-bordered table-hover mt-3'>
            <thead style={{ textAlign: 'center' }}>
              <tr>
                <th className='h5'>Product Type</th>
                <th className='h5'>Product Name</th>
                <th className='h5'>Product Price</th>
                <th className='h5'>Product Picture</th>
                <th className='h5'>Product Count</th>
                <th className='h5'>Total Prices</th>
                <th className='h5'>Product Delete</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: 'center' }}>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="7">
                    <p className='h5'>No Product Was Added</p>
                  </td>
                </tr>
              ) : (
                <>
                  {cart.map((item) => (
                    <tr key={item.ProductId}>
                      <td className='h5'>{item.ProductType}</td>
                      <td className='h5'>{item.ProductName}</td>
                      <td className='h5'>{item.ProductPrice}</td>
                      <td className='h5'>
                        <img src={item.ProductPicture} alt={item.ProductName} />
                      </td>
                      <td className='align-middle'>
                        <div className='input-group quantity mx-auto' style={{ width: '100px' }}>
                          <div className='input-group-btn'>
                            <button
                              className='btn btn-sm btn-primary btn-minus'
                              onClick={() =>
                                item.User_ProductCount - 1 === 0
                                  ? dispatch(remove_cart(local.userId, item.ProductId))
                                  : (dispatch(dec_cart_qty(local.userId, item.ProductId)),
                                    dispatch(inc_products_qty(item.ProductId)))
                              }
                            >
                              <i className='fa fa-minus'></i>
                            </button>
                          </div>
                          <p className='form-control form-control-sm bg-secondary text-center'>{item.User_ProductCount}</p>
                          <div className='input-group-btn'>
                            <button
                              className='btn btn-sm btn-primary btn-plus'
                              onClick={() =>
                                dispatch(inc_cart_qty(local.userId, item.ProductId)) &&
                                dispatch(dec_products_qty(item.ProductId))
                              }
                            >
                              <i className='fa fa-plus'></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className='h5'>
                        {item.ProductOff === 0
                          ? item.ProductPrice * item.User_ProductCount
                          : Math.round(
                              item.User_ProductCount * item.ProductPrice - (item.ProductPrice * item.ProductOff) / 100
                            )}
                      </td>
                      <td>
                        <button
                          type='button'
                          onClick={() => dispatch(remove_cart(local.userId, item.ProductId))}
                          className='btn btn-danger'
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
                            <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan='5' className='h5'>
                      Overall Total:
                    </td>
                    <td colSpan='2' className='h5'>
                      {overallTotal}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return <Navigate to='/form-login-user' replace />;
  }
};
