import React, {useState} from 'react'
//import Tableproducts from './components/Tableproducts';
import {Navigate} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {remove_product} from '../state-management/actions/ProductAction'
import DataGrid, {
    Column,
    Editing,
    Paging,
    Selection,
    Toolbar,
    Item,
  } from 'devextreme-react/data-grid';
  import { Button } from 'devextreme-react/button';
  import ArrayStore from 'devextreme/data/array_store';
  import DataSource from 'devextreme/data/data_source';
  
const Paneladmin = () => {
    const products=useSelector(store=>store.productState)
    const [local,setlocal] = useState(JSON.parse(localStorage.getItem('admin')))
    const [selectedItemKeys,setselectedItemKeys] = useState([])
    const dispatch=useDispatch()
    const remove = (item) => {
    dispatch(remove_product(item.ProductId))
    }
    const dataSource = new DataSource({
    store: new ArrayStore({
        data: products,
        key: 'ProductId',
    }),
    });
    return (
        <>
            {
                local ?
                    <div className='d-flex justify-content-center flex-column align-items-center w-75 m-auto'>
                        {/* {
                                    <Tableproducts products={products} productitem={productitem} setproductitem={setproductitem}
                                                seteditproductshow={seteditproductshow} adminname={adminname}
                                                setaddproductshow={setaddproductshow} addproductshow={addproductshow}
                                                remove={remove}/>
                        } */}
                        <button className='btn btn-danger' onClick={a=>{setlocal(localStorage.clear())}}>logout</button>
                        <DataGrid id="gridContainer"
                            dataSource={dataSource}
                            showBorders={true}
                        >
                            <Selection mode="multiple" />
                            <Paging enabled={false} />
                            <Editing
                                mode="cell"
                                allowUpdating={true}
                                allowAdding={true}
                                allowDeleting={true} />
                            <Column dataField="ProductType" />
                            <Column dataField="ProductName" />
                            <Column dataField="ProductPrice" width={170} />
                            <Column dataField="ProductOff" width={170} />
                            <Column dataField="Admin_ProductCount" width={125}/>
                            {/* <Column dataField="BirthDate" dataType="date" /> */}
                            <Toolbar>
                                <Item name="addRowButton" showText="always" />
                                <Item location="after">
                                <Button
                                    icon="trash"
                                    text="Delete Selected Records" />
                                </Item>
                            </Toolbar>
                        </DataGrid>
                    </div>
                :
                    <Navigate to="/form-admin" replace/>
            }
        </>
    )
}

export default Paneladmin
