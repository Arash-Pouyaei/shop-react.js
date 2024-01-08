import React from 'react'

const Tableproducts = ({adminname , setaddproductshow , addproductshow , data , remove , seteditproductshow , setproductitem , productitem}) => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center w-100'>
        <h1 className='h1 mt-3'>welcome back { adminname }</h1>
        <div>
        <button onClick={a=>setaddproductshow(!addproductshow)} className='btn btn-success mt-3'>
            <i className='fa fa-plus'></i>
        </button>
        </div>
        <table className='table table-striped table-bordered table-hover mt-3'>
        <thead style={{textAlign:"center"}}>
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
        <tbody style={{textAlign:"center"}}>
            {
                data.map((item)=>(
                    <tr>
                        <td className='h5'>{item.ProductType}</td>
                        <td className='h5'>{item.ProductName}</td>
                        <td className='h5'>{item.ProductPrice}</td>
                        <td className='h5'>{item.ProductPicture}</td>
                        <td className='h5'>{item.ProductCount}</td>
                        <td className='h5'>{item.ProductDate}</td>
                    <td>
                        <button type='button' onClick={e => {seteditproductshow(true);setproductitem([item])}} className='btn btn-warning'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button type="button" onClick={r => remove(item)} className='btn btn-danger'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
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
