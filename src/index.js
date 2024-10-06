import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './Pages/Courses';
import Homepage from './Pages/Homepage';
import Workwithme from './Pages/Workwithme';
import Podcast from './Pages/Podcast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       < Route element={<Homepage/>}>
       <Route path='/' element={<Home />} />
       <Route path='/Workwithme' element={<Workwithme/>}/>
       <Route path='/Courses' element={<Courses/>}/>
       <Route path='/Podcast' element={<Podcast/>}/>
    
       </Route>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



