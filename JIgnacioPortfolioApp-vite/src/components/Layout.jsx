/*
Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/images/jfilogo.png';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center bg-gray-900 text-white px-4 sm:px-10 py-5 bg-opacity-45">
                {/* Logo */}
                <img src={myLogo} alt="James Ignacio" className="h-16 w-auto sm:h-20 sm:w-auto rounded-full" />

                {/* Hamburger Icon for Mobile */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="hidden sm:flex space-x-6 text-lg">
                    <Link to="/" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">About Me</Link>
                    <Link to="/project" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Project</Link>
                    <Link to="/services" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Services</Link>
                    <Link to="/contact" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Contact</Link>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden bg-gray-900 text-white px-4 py-4 space-y-4">
                    <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">About Me</Link>
                    <Link to="/project" className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Project</Link>
                    <Link to="/services" className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Services</Link>
                    <Link to="/contact" className="block px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Contact</Link>
                </div>
            )}

            <hr className="w-full border-gray-300" />
        </>
    );
}
