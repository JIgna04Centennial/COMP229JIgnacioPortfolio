import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/jfilogo.png';

export default function Layout() {
    return (
        <>
            <div className="flex justify-between items-center bg-gray-900 text-white px-10 py-5 bg-opacity-45">

                <img src={myLogo} alt="James Ignacio" className=" w-15 h-14 rounded-full" />
                {/* Navigation Links */}
                <nav className="space-x-6 text-lg">
                    <Link to="/" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">About</Link>
                    <Link to="/education" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Education</Link>
                    <Link to="/project" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Project</Link>
                    <Link to="/contact" className="px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300">Contact</Link>
                </nav>
            </div>
            <hr className="w-full border-gray-300" />

        </>
    );
};