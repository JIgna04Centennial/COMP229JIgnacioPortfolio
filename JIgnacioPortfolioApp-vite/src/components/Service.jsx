/*
Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945
*/

import React from 'react';
// Import the images
import imgCybersecurity from '../assets/images/cybersecurity.jpg';
import imgWebDevelopment from '../assets/images/webdevelop.jpg';
import imgCloudSecurity from '../assets/images/cloudsecurity.jpg';
import imgDevOps from '../assets/images/Devops.jpg';
import imgCustomDev from '../assets/images/customdev.jpg';

const services = [
    {
        title: 'Cybersecurity Consulting',
        description: 'Providing expert advice on securing your business assets, implementing security measures, and responding to incidents.',
        image: imgCybersecurity
    },
    {
        title: 'Web Development',
        description: 'Creating modern, responsive websites with secure backends, using technologies like JavaScript, React, and TypeScript.',
        image: imgWebDevelopment
    },
    {
        title: 'Cloud Security',
        description: 'Offering comprehensive cloud security solutions on platforms like AWS, Azure, and Google Cloud to protect your data.',
        image: imgCloudSecurity
    },
    {
        title: 'DevOps Solutions',
        description: 'Automating infrastructure and ensuring scalable and secure systems using tools like Kubernetes, Docker, and Jenkins.',
        image: imgDevOps
    },
    {
        title: 'Custom Software Development',
        description: 'Building custom applications tailored to your business needs, including mobile apps, enterprise software, and more.',
        image: imgCustomDev
    }
];

const Services = () => {
    return (
        <div className="w-full sm:w-5/6 text-white py-10 bg-opacity-65 bg-black">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-8">My Services</h1>
                <p className="text-xl mb-12 text-red-400">I offer a range of services in software development, security, and cloud solutions. Below are some of the key areas I specialize in.</p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 bg-opacity-65">
                            <img src={service.image} alt={service.title} className="rounded-lg h-48 w-full object-cover mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
