import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
/* import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
' */


const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
{/*  <Route exact path="/about" element={<About />} />
 <Route exact path="/education" element={<Education />} />
 <Route exact path="/project" element={<Project />} />
 <Route exact path="/contact" element={<Contact />} />
  */}
 </Routes>
 </div>
)
}
export default MainRouter
