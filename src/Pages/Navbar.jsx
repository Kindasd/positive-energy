import { SignpostOutlined } from "@mui/icons-material";
import React from "react";
import Signup from"./Signup";


const Navbar = () => {
  return (
    
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:"rgb(247, 199, 167)" }} className="navbar navbar-expand-lg navbar-light " >
      <i className="mer">MeridenLifeCoaching</i>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
          <li className="nav-item" style={{marginTop:"19px",marginRight:"15px"}}>
            <a href="/" style={{ color:"rgb(245, 97, 52)",fontSize:"20px" }}>Home</a>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color:"rgb(245, 97, 52)",fontSize:"20px", marginTop:"15px"}}
            >
              Menu
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/courses"  style={{ color:"rgb(245, 97, 52)"}}>Courses</a>
              <a className="dropdown-item" href="/Workwithme"  style={{ color:"rgb(245, 97, 52)"}}>Work with me</a>
              <a className="dropdown-item" href="/podcast"  style={{ color:"rgb(245, 97, 52)"}}>Podcast </a>
            </div>
          </li>
          
          <li className="nav-item" style={{padding:"5px",border:"2px solid rgb(245, 97, 52)",borderRadius:"50px",fontSize:"20px", margin:"15px"}}>
            <Signup/>
          
          </li>

         
        </ul>
        
     
      </div>
      
    </nav>
   
  );
};

export default Navbar;
