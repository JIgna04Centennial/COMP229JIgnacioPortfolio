/*
Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945
*/

import React from 'react';
import myPortrait from '../assets/images/portrait.png'; // Update image path if necessary

function About() {
    // Determine if Vite is in production or development mode (to prevent unauthorized PII leakage of my resume)
    const isProd = import.meta.env.PROD;
    const resumeDev = import.meta.env.VITE_RESUME_DEV;
    const resumePublic = import.meta.env.VITE_RESUME_PUBLIC;
    const myResume = isProd ? resumePublic : resumeDev;

    return (
        <div className="text-white px-4 sm:px-10 py-10">
            <div className="w-full sm:w-4/6 mx-auto text-white px-4 sm:px-10 py-10 bg-black rounded-lg bg-opacity-85">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img src={myPortrait} alt="James Ignacio" className="rounded-full h-48 sm:h-64" />
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-center">About Me</h1>
                
                {/* Career History */}
                <p className="text-xl sm:text-2xl text-red-400 font-semibold mt-4 text-center">
                    Career History
                </p>
                <p className="text-base sm:text-lg mt-4 leading-relaxed text-center sm:text-left">
                    F5 Networks – 2019 - Present <br />
                    Senior Strategic Technical Account Manager<br /><br />
                    Royal Bank of Canada – 2018-2019<br />
                    Information Security Specialist – Cyber Security Operation Services<br /><br />
                    Scotiabank – 2007 - 2018 <br />
                    2016 - 2018 - Senior Manager - Cyber Security Operations Centre <br />
                    2014 - 2016 - Security Specialists - PKI & Cryptography <br />
                    2010 - 2014 - Senior Security Analysts (Cyber Engineering)<br />
                    2007 - 2010 - Security System Developer (KPI and Dashboards)<br />
                </p>
                
                {/* Technical Expertise */}
                <p className="text-xl sm:text-2xl text-red-400 font-semibold mt-4 text-center sm:text-left">
                    Technical Expertise
                </p>
                <p className="text-base sm:text-lg mt-4 leading-relaxed text-center sm:text-left">
                    Security & Networking: F5 ADC, Shape Security, WAF, Cisco, DNS, DLP, SNORT, Websense<br />
                    Cloud & DevOps: AWS, Azure, Google Cloud, Kubernetes, Docker, OpenShift, Ansible, Jenkins<br />
                    Endpoint Security: McAfee EPO, Encryption, GPO<br />
                    Cryptography: PKI, MFA, Hardware Security Modules<br />
                    Programming Languages: TypeScript, Java, C++, .NET, Python<br />
                    Enterprise Systems: SQL, Oracle, Algosec, IP360<br />
                </p>
                
                {/* Resume Link */}
                <div className="flex justify-center mt-6">
                    <a
                        href={myResume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full sm:w-80 text-1xl text-red-400 font-semibold px-3 py-2 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300 text-center"
                    >
                        See my full resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
