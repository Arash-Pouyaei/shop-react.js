import React, { useState } from 'react'
import { Landingpage } from './Landingpage';
import { datas } from './data/data';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/responsive.css";

function App() {
  const [data,setdata] = useState(datas)

  return (
    <>
      <Landingpage data={data} />
      {/*<button onClick={a=>{setdata([...data,{ProductType:"women clothes",ProductName:"b" , ProductPrice:1000 , ProductPicture:"a",ProductUrl:()=>{return(this.ProductType+this.ProductName)}}])}}>add</button>*/}
      {" "}
      <button onClick={a=>console.log()}>log</button>
      {" "}
      <button onClick={a=>console.log(data.ProductUrl)}>shesh</button>
    </>
  );
}

export default App;
