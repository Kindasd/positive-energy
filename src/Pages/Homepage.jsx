import React from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import { Outlet } from "react-router-dom";
export default ()=>{
    return(<>
    <Navbar/>
    {
        <Outlet/>
    }
     <Fotter/>
    </>)
}