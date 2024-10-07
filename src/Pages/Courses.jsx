
import LightModeIcon from '@mui/icons-material/LightMode';
import card1 from "../Images/card1.PNG";
import card2 from "../Images/card2.PNG";
import card3 from "../Images/card3.PNG";
import card4 from "../Images/card4.PNG";
import card5 from "../Images/card5.PNG";
import card6 from "../Images/card6.PNG";
import PHOTO2 from "../Images/PHOTO2.PNG";
import PHOTO3 from "../Images/PHOTO2.PNG";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TungstenIcon from '@mui/icons-material/Tungsten';
import Card from "../Component/Card";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Data array with images
const data = [
  { photo: card1 },
  { photo: card2 },
  { photo: card3 },
  { photo: card4 },
  { photo: card5 },
  { photo: card6 }
];

const CourseComponent = () => {
  useEffect(()=>{
    AOS.init({
   
        duration: 700,
        easing: "ease-out-cubic",
      });
},[])
  return (
    <>
    < div style={{background:"rgb(247, 199, 167)"}}>
  
    
      <div className="row mx-0">
        <div className="col-md-6 text-center" style={{padding:"80px"}}>
        <div>
          <b style={{ marginBottom: "5px" ,marginTop:"10px"}}>
          <div data-aos="zoom-in-up" style={{ color: "rgb(127, 127, 240)",marginBottom:"30px"}}> <LightModeIcon sx={{ fontSize: 80 }}  /> </div>

            
            <i className="text3">Self love</i>
          </b>
         
          <b>
            <i className="text3">course</i>
          </b>
          </div>
          <div>
            <i className="text4">SEPT 14—16</i>
          </div>
          <div>
            <i className="text4">VIRTUAL</i>
          </div>
          <div>
            <i className="text4">$450</i>
       
           
          </div>
      
         
        </div>
        
        <div className="col-12 col-md-6 mt-5">
              <img 
              
                className="img-fluid" 
                
                src={PHOTO2} 
                alt="" 
                 width="600"
                height="600" 
              />
            </div>

      </div>
       
    
      <div
        className="text5 text-center"
        style={{ backgroundColor: "aliceblue", marginTop: "30px"}}
      >
        <div className="row mx-0"  data-aos="zoom-in-up">
          <div className="col-md-4"></div>
          <div className="col-md-4" style={{marginTop:"20px",marginBottom:"20px" }}>
            <TungstenIcon sx={{ fontSize:70}} />
          </div>
          <div className="col-md-4"></div>
        </div >
        <i style={{marginBottom:"20px" }}>
          This three-day virtual course shows you how to break negative patterns that hold you back.
          You’ll create healthy habits that lighten your outlook on life, and yourself.
        </i>
        <div>
          ..............
        </div>
      </div>

      <div className="row mx-0 text6 ">
        <div className="col-md-4 text-center">
          <div style={{ display: "flex", marginBottom: "40px",marginTop:"20px" }}>
            <div style={{ border: "double", borderRadius: "50px", width: "170px", margin: "auto" }}>
              <b>Day 01 / Looking within</b>
            </div>
          </div>
          Day One is all about you.
          You’ll take a deep look at yourself and reflect on where you are today, and where you want to be.
        </div>
        <div className="col-md-4 text-center">
          <div style={{ display: "flex", marginBottom: "40px",marginTop:"20px" }}>
            <div style={{ border: "double", borderRadius: "50px", width: "170px", margin: "auto" }}>
              <b>Day 02 / The External</b>
            </div>
          </div>
          On Day Two we shift our focus to others in your world. How do you relate to your friends, family,
          and the other people in your life? What do you want to change?
        </div>
        <div className="col-md-4 text-center">
          <div style={{ display: "flex", marginBottom: "40px" ,marginTop:"20px"}}>
            <div style={{ border: "double", borderRadius: "50px", width: "170px", margin: "auto" }}>
              <b>Day 03 / New Beginnings</b>
            </div>
          </div>
          We put everything together on Day Three. You’ll see how learning how to love yourself is the key to better
          relationships with everyone in your life, especially yourself
       
        </div>
       
       
      </div>

      <div className="row mx-0 mt-2">
       
        <div className="row mx-0 " >
             <div className="col-12 col-md-6 mt-2">
          <img 
          data-aos="zoom-in-up"
            className="img-fluid" 
            src={PHOTO3} 
            alt="" 
            width="600"
            height="600" 
          />
        </div>
        <div className="col-md-6 text-light text-center">
          <b className="text1" style={{ marginBottom: "70px", color: "rgb(245, 97, 52)" }}>
            <i>Course structure</i>
          </b>
          <div>
            <i style={{ color: "rgb(245, 97, 52)", fontSize: "30px" }}>
              This is a three-day, virtual event designed for
            </i>
          </div>
          <div>
            <i style={{ color: "rgb(245, 97, 52)", fontSize: "30px" }}>
              you to learn at your own pace. Attendees will
            </i>
          </div>
          <div>
            <i style={{ color: "rgb(245, 97, 52)", fontSize: "30px" }}>
              receive an email with instructions on how to
            </i>
          </div>
          <div>
            <i style={{ color: "rgb(245, 97, 52)", fontSize: "30px" }}>
              access the materials for each day.
            </i>
          </div>
          <div style={{ marginTop: "130px" }}>
            <i style={{ color: "rgb(234, 105, 20)", fontSize: "20px" }}>
              All sales are final and non-refundable.
            </i>
          </div>
          <div>
            <i style={{ color: "rgb(245, 97, 52)", fontSize: "20px" }}>
              Please read our Terms & Conditions and Privacy Policy before proceeding to checkout.
            </i>
          </div>
        </div>
      </div>

      <div className="row mx-0" style={{ backgroundColor: "rgb(245, 97, 52)" ,marginTop:"32px"}}>
        <div className="row mx-0">
          <div className="col-md-4"></div>
          <div className="col-md-4" style={{ textAlign: "center", color: "white" ,fontSize:"40px",marginBottom:"15px"}}>
            WHAT’S INCLUDED
          </div>
          <div className="col-md-4"></div>
        </div>

        <div className="row mx-0" style={{marginBottom:"30px", marginTop:"30px"}}>
          <Splide
            options={{
              type: 'loop',
              perPage: 4,
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              gap: '1rem',
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <Card photo={item.photo} />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        </div>
      </div>
      </div>
    </>
    
  );
};

export default CourseComponent;
