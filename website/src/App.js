import React from "react";
import "./App.css";
import Navbar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      {/* <img src={background} className="background" alt="" /> */}
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects'  element={<Projects />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          </Routes>
      </Router>
    </>
    
  );
};

export default App;