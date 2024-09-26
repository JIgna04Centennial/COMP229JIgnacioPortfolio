import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from '/src/components/Home';
import Layout from '/src/components/Layout';
import Footer from '/src/components/Footer';
import backImg from '/src/assets/images/nyc.jpg';
import About from '/src/components/about';
import Services from '/src/components/Service';
import Contact from '/src/components/Contact';
import Project from './components/project';

/* import About from '/src/src/about'
import Contact from '/src/src/contact'
import Education from '/src/src/education'

' */


const MainRouter = () => {
    return (
        <>
            <div className=" bg-cover bg-origin-border p-3 bg-center)" style={{ backgroundImage: `url(${backImg})` }}>
                <Layout />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/contact" element={<Contact />} />
                    {/*  <Route exact path="/about" element={<About />} />
                    
                    <Route exact path="/contact" element={<Contact />} />
                    */}
                </Routes>
                <Footer />
            </div>
        </>
    )
}
export default MainRouter
