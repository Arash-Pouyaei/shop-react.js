import React, { useState } from 'react'
import {Header} from './components/Header'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/responsive.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './state-management/store'
import {routes} from "./routes";
import { generateAppRoutes } from "./utils";
import Page from './Page'
import 'devextreme/dist/css/dx.light.css';

function App() {
    const [productitem,setproductitem] = useState()
    const appRoutes = generateAppRoutes(routes);
    return (
        <>
            <BrowserRouter>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Provider store={store}>
                    <Header appRoutes={appRoutes}/>
                    <Routes>
                        {
                            appRoutes.map(route => {
                                return(
                                    <Route key={route.path} path={route.path} element={<Page productitem={productitem}setproductitem={setproductitem} route={route}/>}>
                                    </Route>
                            )})
                        }
                    </Routes>
                    </Provider>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;