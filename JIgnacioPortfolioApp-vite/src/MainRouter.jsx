import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Footer from './components/Footer';
import backImg from './assets/nyc.jpg';
import About from './components/about';
import Project from './components/project';
/* import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'

' */


const MainRouter = () => {
    return (
        <>
            <div className=" bg-cover bg-origin-border p-3 bg-cover bg-center)" style={{ backgroundImage: `url(${backImg})` }}>
                <Layout />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/project" element={<Project />} />
                    {/*  <Route exact path="/about" element={<About />} />
                    <Route exact path="/education" element={<Education />} />
                    <Route exact path="/contact" element={<Contact />} />
                    */}
                </Routes>
                <Footer />
            </div>
        </>
    )
}
export default MainRouter
