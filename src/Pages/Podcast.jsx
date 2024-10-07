
import IMG3 from "../Images/IMG3.PNG"
import IMG4 from "../Images/IMG4.PNG"
import IMG6 from "../Images/IMG6.PNG"
import IMG7 from "../Images/IMG7.PNG"
import IMG8 from "../Images/IMG8.PNG"
import IMG9 from "../Images/IMG9.PNG"
import TripOriginIcon from '@mui/icons-material/TripOrigin';
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

      <div className="col-md-2">

      </div>
        <div className="col-md-8 text-light text-center" style={{marginTop:"50px"}}>
        <div><i style={{fontSize:"15px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}>podcast  </i></div>

        <div data-aos="zoom-in-up" style={{ color: "rgb(127, 127, 240) ",marginBottom:"20px"}}> <TripOriginIcon sx={{ fontSize: 80 }} /></div>

        <b  className="text1" style={{marginBottom:"10px"}}><i> Reflect with  </i></b>
        <b className="text1"> <i > Meriden </i></b>
        <div><i style={{fontSize:"15px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}>Listen to my podcast where I talk with special guests about creating the life, </i></div>
        <div><i style={{fontSize:"15px",fontfamily:"initial",color:"rgb(245, 97, 52)"}}> love, and relationships you want. New episodes posted each week.</i></div>
      
        </div>

      <div className="col-md-2">

      </div>
      
  </div>

  <div className="row mx-0 text-center " style={{marginTop:"100px"}}>
    <div className="col-md-4 text-center"> 
     <img className="img-fluid" style={{marginTop:"60px"}} data-aos="zoom-in-up" width="390PX" src={IMG3}  />
     <div style={{display:"flex"}}><div style={{fontSize:"30px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto"}}>Ep.6/ Loving Yourself</div> </div>
    </div>
    <div className="col-md-4 text-center"> 
    <img className="img-fluid" data-aos="zoom-in-up" width="390PX" src={IMG4} />
    <div style={{display:"flex"}}> <div style={{fontSize:"30px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto"}}>Ep.5/ Overcoming Fear</div>
    </div>
    </div>
    <div className="col-md-4 text-center">
    <img className="img-fluid" style={{marginTop:"90px"}} data-aos="zoom-in-up"   width="390PX" src={IMG6}  /> 
    <div style={{display:"flex"}}> <div style={{fontSize:"30px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto"}}>Ep.4/ Relationships</div>
    </div>
    </div>

        
    </div>   

    <div className="row mx-0 mt-4 text-center">
    <div className="col-md-4 text-center"> 
      <div  data-aos="zoom-in-up" style={{marginTop:"50px"}}><img className="img-fluid" width="390PX" src={IMG8}  /></div>
     <div style={{display:"flex"}}><div style={{fontSize:"30px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto",marginBottom:"70px"}}>Ep.2/ Family</div> </div>
    </div>
    <div className="col-md-4 text-center"> 
    <div data-aos="zoom-in-up" style={{marginTop:"-50px"}}> <img className="img-fluid" width="390PX" src={IMG7} /></div>
    <div style={{display:"flex"}}> <div style={{fontSize:"30px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto"}}>Ep.3/ Burnout</div>
    </div>
    </div>
    <div className="col-md-4 text-center">
    <div data-aos="zoom-in-up" style={{marginTop:"100px"}}><img className="img-fluid" width="390PX" src={IMG9}  /> </div>
    <div style={{display:"flex"}}> <div style={{fontSize:"25px",fontfamily:"initial",color:"rgb(245, 97, 52)",margin:"auto"}}>EEp.1/ Recharge your self-esteem</div>
    </div>
    </div>

        
     


    <div style={{flex: 1, height: '1px', backgroundColor: 'rgb(245, 97, 52)',marginTop:"50px"}} />

   </div>


  </div>
       
    </>)
}