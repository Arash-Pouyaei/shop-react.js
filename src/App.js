import React, { useState } from 'react'
import { Landingpage } from './Landingpage';
import { admins , datas , users } from './data/data';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/responsive.css";
import Paneladmin from './admin/Paneladmin';
function App() {
  const [data,setdata] = useState(datas)
  const [admin,setadmin] = useState(admins)
  const [user,setuser] = useState(users)
  return (
    <>
      <Landingpage user={user} setuser={setuser} data={data} setdata={setdata} admin={admin} />
    </>
  );
}

export default App;
