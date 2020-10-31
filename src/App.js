import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import Blogs from './Components/Blogs/Blogs';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';


function App() {
  return (
    <>
   
      <Navbar/>
      <Header/>
      <Work/>
      <Skills/>
      <Blogs/>
      <About/>
    
    </>
  );
}

export default App;
