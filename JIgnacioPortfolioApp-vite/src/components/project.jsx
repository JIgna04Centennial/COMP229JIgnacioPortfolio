import React from 'react';
import ProjectTile from './cards/ProjectTile';

function Project() {
    const projects = [
    { 
        title: 'My First React Project', 
        description: 
       'This is my first project using React, where I designed and developed a personal portfolio website. I tried to make website clean, responsive design with some styling using TailwindCSS.', 
        image: './src/assets/images/project1.png'
     },
     { 
        title: 'Simple Java Script Console Program', 
        description: 
       'Just created some simple app for my Java class.', 
        image: './src/assets/images/java.png'
     },
     { 
        title: 'More work to come', 
        description: 
       'Still in progresss.', 
        image: './src/assets/images/codeinprogress.png'
     },
    ];


    return (
        <div className="w-5/6 text-white px-10 py-10 bg-black rounded-lg bg-opacity-85">
            <h1 className="text-5xl font-bold mb-8">Current Projects</h1>
            <p className="text-2xl text-red-400 font-semibold mb-4">Academics</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectTile key={index} project={project} />
                ))}
                </div>
        </div>
    )
}

export default Project