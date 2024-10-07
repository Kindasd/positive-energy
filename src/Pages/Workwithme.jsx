
import IMG1 from "../Images/IMG1.PNG"
import Signup from"./Signup";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LightModeIcon from '@mui/icons-material/LightMode';
import IMG2 from "../Images/IMG2.PNG"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default()=>{
    useEffect(()=>{
        AOS.init({
       
            duration: 700,
            easing: "ease-out-cubic",
          });
    },[])
    return(<>

<div style={{background:"rgb(247, 199, 167)"}}>
  

  <div className="row mx-0 " >
  <div className="col-md-7 text-light text-center" style={{marginTop:"100px"}}>
  <div data-aos="zoom-in-up" style={{ color: "rgb(127, 127, 240)",marginBottom:"30px"}}> <LightModeIcon sx={{ fontSize: 80 }}  /> </div>

     <b  className="text1" style={{marginBottom:"20px", color:"rgb(245, 97, 52)"}}><i> work </i></b>
     <b className="text1"> <i  style={{marginTop:"20px", color:"rgb(245, 97, 52)"}}> with me </i></b>
     <div><i className="text2"> 1x1 PRIVATE SESSIONS</i></div>
     <div><i className="text2"> MONTHLY MENTORSHIP</i></div>
     
      </div>

      
      <div className="col-12 col-md-5">
              <img 
              
                className="img-fluid" 
                src={IMG1} 
                alt="" 
                width="465" 
                height="600" 
              />
            </div>
   
  </div>
    <div className="row mx-0" style={{padding:"20px"}}>
      
     <div className="col-md-6 text-center" data-aos="zoom-in-up">
        <div  style={{backgroundColor:"white",height:"500px", marginTop:"10px",marginBottom:"30px"}}>
        <div style={{ color: "rgb(238, 127, 24)",padding:"10px"}}> <FilterVintageIcon sx={{ fontSize: 80 }}  /> </div>
        <div className="text4" style={{ marginTop:"60px"}}>1x1 PRIVATE SESSIONS</div>
        <div className="text5">I offer one-hour private sessions online or by phone. </div>
        <div style={{display:"flex"}}>
        <div style={{border:"2PX solid rgb(245, 97, 52)",borderRadius: "30PX",margin:"auto",marginTop:"70px",marginBottom:"20px",width:"80px",color:"rgb(245, 97, 52)"}}>
            <Signup/>
        </div>
        </div>
     </div>
     </div>

     

     <div className="col-md-6 text-center" data-aos="zoom-in-up">
        <div  style={{backgroundColor:"white",height:"500px", marginTop:"10px"}}>
        <div style={{ color: "rgb(127, 127, 240)",padding:"10px"}}> <TripOriginIcon  sx={{ fontSize: 80 }} /></div>
        <div className="text4" style={{ marginTop:"60px"}}>MENTORSHIP</div>
        <div className="text5">My monthly mentorship program helps you stay on track. </div>
        <div style={{display:"flex"}}>
        <div style={{border:"2PX solid rgb(245, 97, 52)",borderRadius: "30PX",margin:"auto",marginBottom:"20px",marginTop:"70px",width:"80px",color:"rgb(245, 97, 52)"}}>
            <Signup/>
        </div>
        </div>
        </div>
     </div>
    </div>

    <div className="row mx-0 mt-3" >

    
      <div className="row mx-0 " >
             <div className="col-12 col-md-6 ">
          <img 
          data-aos="zoom-in-up" 
            className="img-fluid" 
            src={IMG2} 
            alt="" 
            width="465" 
            height="600" 
          />
        </div>
   
  <div className="col-md-6 text-light text-center" style={{marginTop:"20px"}}>

     <b  style={{marginBottom:"20px",fontSize:"65px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}><i>how you  </i></b>
     <b> <i  style={{marginTop:"20px",fontSize:"65px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}> work </i></b>
     <div><i style={{fontSize:"35px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}> Don’t see what you’re looking for? I can </i></div>
     <div><i style={{fontSize:"35px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}> customize my coaching programs to match </i></div>
     <div><i style={{fontSize:"35px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}> your personal learning style. </i></div>
     <div style={{marginTop:"140px"}}><i style={{fontSize:"25px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}>QUESTIONS? BOOK A FREE CONSULTATION </i></div>
     
  </div>
  
  

  <div style={{flex: 1, height: '1px', backgroundColor: 'rgb(245, 97, 52)',marginTop:"50px"}} />

  </div>









  </div> 
    
  </div>  
    </>)
}