

import PHOTO1 from "../Images/PHOTO1.jpeg"
import TungstenIcon from '@mui/icons-material/Tungsten';
import LightModeIcon from '@mui/icons-material/LightMode';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import SELFLOVE from "../Images/SELFLOVE.PNG"
import IMG5 from "../Images/IMG5.PNG"
import Signup from"./Signup";
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
            <div className="col-md-6 mt-3  ">
              <img width="465PX" height="600PX" src={PHOTO1} alt="" />
            </div>
            <div className="col-md-6 text-light text-center" style={{marginTop:"50px"}}>
            <div data-aos="zoom-in-up" style={{ color: "rgb(127, 127, 240) ",marginBottom:"20px"}}> <FilterVintageIcon sx={{ fontSize: 80 }} /></div>

           <b  className="text1" style={{marginBottom:"10px"}}><i> meriden </i></b>
           <b className="text1"> <i > Coaching </i></b>
           <div><i className="text2"> RELATIONSHIPS</i></div>
           <div><i className="text2"> FAMILY</i></div>
           <div><i className="text2"> WORK </i></div>
           <div><i className="text2"> LIFE </i></div>
            </div>
            
            
        </div>

        <div style={{marginBottom:"30px"}}>
        <div
        className="text5 text-center"
        style={{ backgroundColor: "aliceblue", marginTop: "50px",marginBottom:"60px"}}
      >
        <div className="row mx-0 ">
          <div className="col-md-4"></div>
          <div data-aos="zoom-in-up" className="col-md-4 " style={{marginTop:"30px"}}>
            <TungstenIcon sx={{ fontSize: 70 }} />
          </div>
          <div className="col-md-4 mt-4"></div>
        </div>
        <i >
        Listening is the foundation of my coaching approach.
         Let me help you discover how to overcome your fears and live the life you deserve. 
        </i>
        <div>
          ..............
        </div>
      </div>
      </div>


      <div className="row mx-0 text-center mt-4" style={{color:"white", fontFamily:"initial"}}>
        <h1 style={{marginTop:"25px"}}><b>MY COACHING METHOD</b></h1>
    </div>
      <div className="row mx-0 text-center mt-4" >
        <div className="col-md-4">
            <div data-aos="zoom-in-up" style={{ color: "rgb(245, 97, 52)"}}> <LightModeIcon sx={{ fontSize: 100 }}  /> </div>
            <h3 style={{ color: "rgb(234, 105, 20)",marginTop:"20px"}}>FOCUS</h3>
            <div style={{ color: "rgb(234, 105, 20)", fontSize: "20px" }}> 
                It all starts by learning 
                how to focus on what you want.
                </div>
        </div>
        <div className="col-md-4">
        <div data-aos="zoom-in-up" style={{ color: "rgb(238, 127, 24)"}}> <FilterVintageIcon sx={{ fontSize: 100 }}  /> </div>
        <h3 style={{ color: "rgb(234, 105, 20)",marginTop:"20px" }}> REFLECT</h3>
        <div style={{ color: "rgb(234, 105, 20)", fontSize: "20px" }}> 
            Next, you’ll reflect on what may be blocking you,
             and learn how to overcome these obstacles. 
             </div>
        </div>
        <div className="col-md-4">
        <div data-aos="zoom-in-up" style={{ color: "rgb(127, 127, 240) "}}> <TripOriginIcon  sx={{ fontSize: 100 }} /></div>
        <h3 style={{ color: "rgb(234, 105, 20)" ,marginTop:"20px"}}> Refine</h3>
        <div style={{ color: "rgb(234, 105, 20)", fontSize: "20px" }}>
             The last step? We learn how to continually refine 
            what we’ve learned. Think of this as your new beginning.
            </div>
        </div>
      </div>

      <div className="row mx-0 " style={{marginTop:"70px"}}>
            <div className="col-md-7 text-light text-center" style={{marginTop:"130px"}}>
                <b  className="text1" style={{marginBottom:"10px"}}><i> upcoming </i></b>
                <b className="text1"> <i > course</i></b>
                <div><i className="text2"> SELF LOVE</i></div>
                <div><i className="text2"> SEPT 14—16</i></div>
                <div><i className="text2"> VIRTUAL</i></div>
                
            </div>
            
            <div className="col-md-5">
              <img data-aos="zoom-in-up" width="465PX" height="700PX" src={SELFLOVE} alt="" />
            </div>

            
        </div>
        <div className="row mx-0 mt-4">
       <img  src={ IMG5 } alt="" />
        </div>

       

            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="row mx-0 mt-4">
            <div className="col-md-3 text-center">
                <h4 style={{color:"rgb(245, 97, 52)" }}> <b> Newsletter</b></h4>
                <div style={{ color: "rgb(234, 105, 20)", fontSize: "20px" }}>
                    Sign up for coaching tips, events, and more.
                </div>
            </div>
            <div className="col-md-3 text-center mt-2" >
          
            <input style={{border:"2px solid white",borderRadius:"50px"}} type="text" placeholder="First name" />
           
            </div>

            <div className="col-md-3 text-center">
            <input style={{border:"2px solid white",borderRadius:"50px",marginBottom:"5px",marginTop:"10px"}} type="text" placeholder="Last name" />             
            
            </div>
            <div className="col-md-3 text-center">
            <input style={{border:"2px solid white",borderRadius:"50px",marginBottom:"5px",marginTop:"10px"}} type="text" placeholder="Email" />           
            </div>
            
        </div>
        </div>
        
        <div className="row mx-0">
            <div className="col-md-5">
            
            </div>
            <div className="col-md-7 text-center">
            <div data-aos="zoom-in-up" style={{border:"2px solid white",borderRadius:"40px",marginLeft:"170px",marginTop:"10px",width:"100px",color:"rgb(245, 97, 52)"}}>
                <Signup/>
                </div>
            </div>
           
            </div>

            <div style={{flex: 1, height: '1px', backgroundColor: 'rgb(245, 97, 52)',marginTop:"50px"}} />

           </div>
        


    
       





        
    
    </>)
}
