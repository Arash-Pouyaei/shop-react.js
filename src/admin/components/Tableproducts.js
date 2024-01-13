import React from 'react'
import { useNavigate } from 'react-router-dom';

const Tableproducts = ({
                           remove,
                           setproductitem,
                           productitem,
                           products
                       }) => {
    const history = useNavigate()
    const adminname=JSON.parse(localStorage.getItem('admin'))
    return (
        <div className='d-flex justify-content-center flex-column align-items-center w-100 m-auto'>
            {/* <h1 className='h1 mt-3'>welcome back {adminname.map(a=><p>{a.username}</p>)}</h1> */}
            <div style={{width:"100%",display:'flex',justifyContent:"space-between"}}>
                <p></p>
                <button onClick={a => {
                    history('/form-admin/panel-admin/add-product')
                }} className='btn btn-success mt-3 mr-2'>
                    <i className='fa fa-plus'></i>
                </button>
                <button className='btn btn-danger mt-3 ml-2' onClick={a=>{localStorage.clear();history.push('/form-admin')}}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg></button>
            </div>
            <table className='table table-striped table-bordered table-hover mt-3'>
                <thead style={{textAlign: "center"}}>
                <tr>
                    <th className='h5'>Product Type</th>
                    <th className='h5'>Product Name</th>
                    <th className='h5'>Product Price</th>
                    <th className='h5'>Product Picture</th>
                    <th className='h5'>Product Count</th>
                    <th className='h5'>Product Date</th>
                    <th className='h5'>Product Edit</th>
                    <th className='h5'>Product Delete</th>
                </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                {
                    products.map((item) => (
                        <tr>
                            <td className='h5'>{item.ProductType}</td>
                            <td className='h5'>{item.ProductName}</td>
                            <td className='h5'>{item.ProductPrice}</td>
                            <td className='h5'><img src={item.ProductPicture}/></td>
                            <td className='h5'>{item.ProductCount}</td>
                            <td className='h5'>{/*item.ProductDate.year},{item.ProductDate.month},{item.ProductDate.day},{item.ProductDate.hours},{item.ProductDate.minute*/}learn</td>
                            <td>
                                <button type='button' onClick={e => {
                                   
                                        setproductitem([item]);
                                        history("/form-admin/panel-admin/edit-product");
                                    
                                }} className='btn btn-warning'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path
                                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button type="button" onClick={r => remove(item)} className='btn btn-danger'>
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
        </div>
    )
}

export default Tableproducts
