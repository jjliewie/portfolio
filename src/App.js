// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import './App.css';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import { Homepage } from './pages/Homepage';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { About } from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/publications" element={<Publications/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
