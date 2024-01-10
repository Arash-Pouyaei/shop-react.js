import React, {useState} from 'react'
import {Header} from './components/Header'
import Formloginadmin from './admin/Formloginadmin'
import Formloginuser from './users/Formloginuser'
import Paneladmin from './admin/Paneladmin'
import Addproduct from './admin/components/Addproduct';
import Editproduct from './admin/components/Editproduct';
import Notfound from './Notfound'
import Formregisteruser from './users/Formregisteruser'
import {admins, datas, users} from './data/data';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/responsive.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Landingpage} from './Landingpage'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min'

function App() {
    const [data, setdata] = useState(datas)
    const [admin, setadmin] = useState(admins)
    const [user, setuser] = useState(users)
    const [adminname, setadminname] = useState("");
    const [aut, setaut] = useState(false)
    const [productitem, setproductitem] = useState([])
    const [addproductshow, setaddproductshow] = useState(false)
    const [editproductshow, seteditproductshow] = useState(false)
    return (
        <>
            <Router>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    < Header/>
                    <Switch>
                        <Route exact path="/" render={() => {
                            return (<Landingpage data={data}/>)
                        }}/>
                        <Route exact path="/formadmin" render={() => {
                            return (< Formloginadmin setaut={setaut} aut={aut} setadminname={setadminname} data={data}
                                                     setdata={setdata} admin={admin}/>)
                        }}/>
                        <Route exact path="/formuser" render={() => {
                            return (< Formloginuser user={user} setuser={setuser}/>)
                        }}/>
                        {
                            aut ?
                                <>
                                    <Route exact path="/paneladmin" render={() => {
                                        return (<Paneladmin seteditproductshow={seteditproductshow}
                                                            setaddproductshow={setaddproductshow}
                                                            editproductshow={editproductshow}
                                                            addproductshow={addproductshow} adminname={adminname}
                                                            data={data} setdata={setdata} productitem={productitem}
                                                            setproductitem={setproductitem}/>)
                                    }}/>
                                    {
                                        addproductshow ?
                                            <Route exact path="/paneladmin/addproduct" render={() => {
                                                return (<Addproduct addproductshow={addproductshow}
                                                                    setaddproductshow={setaddproductshow} data={data}
                                                                    setdata={setdata} productitem={productitem}
                                                                    setproductitem={setproductitem}/>)
                                            }}/>
                                            :
                                            <Redirect to="/paneladmin"/>
                                    }
                                    {
                                        editproductshow ?
                                            <Route exact path="/paneladmin/editproduct" render={() => {
                                                return (<Editproduct editproductshow={editproductshow}
                                                                     seteditproductshow={seteditproductshow} data={data}
                                                                     setdata={setdata} productitem={productitem}
                                                                     setproductitem={setproductitem}/>)
                                            }}/>
                                            :
                                            <Redirect to="/paneladmin"/>
                                    }
                                </>
                                :
                                <Redirect to='/formadmin'/>
                        }
                        <Route path="*" render={() => {
                            return (<Notfound/>)
                        }}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;