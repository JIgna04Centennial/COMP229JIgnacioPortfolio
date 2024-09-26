import React from 'react';
import myPortrait from '../assets/images/portrait.png'

function about() {
            //Determine if vite is prod or dev mode (To prevent unauthorize PII leakage of my resume)
            const isProd = import.meta.env.PROD;
            const resumeDev = import.meta.env.VITE_RESUME_DEV;
            const resumePublic = import.meta.env.VITE_RESUME_PUBLIC;
            const myResume = isProd ? resumePublic : resumeDev;
    return (
        <>
            <div className="text-white px-10 py-10">
                <div className="w-4/6 text-white px-10 py-10 bg-black rounded-lg bg-opacity-85">
                    <img src={myPortrait} alt="James Ignacio" className="rounded-full h-48" />
                    <h1 className="text-5xl font-bold">About me</h1>
                    <p className="text-2xl text-red-400 font-semibold mt-4">
                        Career History
                    </p>
                    {/* Profile Description */}
                    <p className="text-lg mt-4 leading-relaxed">
                        F5 Networks – 2019 - Present <br />
                        Senior Strategic Technical Account Manager<br />

                        <br />
                        Royal Bank of Canada – 2018-2019<br />
                        Information Security Specialist – Cyber Security Operation Services<br />

                        <br />
                        Scotiabank – 2007 - 2018 <br />
                        2016 - 2018 - Senior Manager - Cyber Security Operations Centre <br />
                        2014 - 2016 - Security Specialists - PKI & Cryptography <br />
                        2010 - 2014 - Senior Security Analysts (Cyber Engineering)<br />
                        2007 - 2010 - Security System Developer (KPI and Dashboards)<br />

                    </p>
                    <p className="text-2xl text-red-400 font-semibold mt-4">

                        Technical Expertise

                    </p>
                    <p className="text-lg mt-4 leading-relaxed">
                        Security & Networking: F5 ADC, Shape Security, WAF, Cisco, DNS, DLP, SNORT, Websense<br />
                        Cloud & DevOps: AWS, Azure, Google Cloud, Kubernetes, Docker, OpenShift, Ansible, Jenkins<br />
                        Endpoint Security: McAfee EPO, Encryption, GPO<br />
                        Cryptography: PKI, MFA, Hardware Security Modules<br />
                        Programming Languages: TypeScript, Java, C++, .NET, Python<br />
                        Enterprise Systems: SQL, Oracle, Algosec, IP360<br />

                    </p>
                    <p className="text-1xl text-red-400 font-semibold mt-4 px-3 py-1 rounded hover:bg-blue-900 hover:text-white transition-colors duration-300 w-80">
                        <a
                            href={myResume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full text-center"
                        >
                            See my full resume
                        </a>

                    </p>
                </div>
            </div>
        </>
    )
}

export default about