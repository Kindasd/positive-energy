
import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default ()=>{
  const navigate =useNavigate()
  useEffect(()=>{
    AOS.init({
   
        duration: 700,
        easing: "ease-out-cubic",
      });
},[])
return(<>

<div className="row mx-0" style={{background:"rgb(247, 199, 167)"}}>

    <div className="col-md-4" style={{display:"flex"}} data-aos="zoom-in-up">
      <h3 style={{color:"rgb(245, 97, 52)",margin:"auto",borderBottom:"2px solid rgb(245, 97, 52)",marginTop:"100px",width:"120px"}} onClick={()=>{
        navigate("/Courses")
      }}>
        COURSES
      
        </h3>
       
    </div>
    <div className="col-md-4" style={{display:"flex"}} data-aos="zoom-in-up">
    <h3 style={{color:"rgb(245, 97, 52)",margin:"auto",borderBottom:"2px solid rgb(245, 97, 52)",marginTop:"100px",width:"220px"}}onClick={()=>{
        navigate("/Workwithme")
      }}>
      WORK WITH ME
      </h3>

    </div>
    <div className="col-md-4" style={{display:"flex"}} data-aos="zoom-in-up" >
    <h3 style={{color:"rgb(245, 97, 52)",margin:"auto",borderBottom:"2px solid rgb(245, 97, 52)",marginTop:"100px",width:"120px", marginBottom:"50px"}}onClick={()=>{
        navigate("/Podcast")
      }} >
      PODCAST
      </h3>

    </div>

</div>


</>)
}