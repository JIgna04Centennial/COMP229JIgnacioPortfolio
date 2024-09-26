/*

Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945

*/


import React from 'react';
import { Link } from 'react-router-dom';

const ProjectTile = ({ project }) => {
    const { title, description, image } = project;
    return (
        <>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <img src={image} alt={title} className="rounded-lg h-100 w-full object-cover mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-400">{description}</p>
        </div>
        </>

    );
};

export default ProjectTile;
