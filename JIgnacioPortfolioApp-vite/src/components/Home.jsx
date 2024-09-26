/*
Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945
*/

import React from 'react'

function Home() {
    return (
        <>
            <div className="text-white px-4 sm:px-10 py-10">
                <div className="w-full sm:w-3/4 md:w-1/2 text-white px-4 sm:px-10 py-10 bg-black rounded-lg bg-opacity-85">
                    <p className="text-lg sm:text-xl mb-2">Hello there! I am....</p>
                    <h1 className="text-3xl sm:text-5xl font-bold">James Ignacio</h1>
                    
                    {/* Role and Skills */}
                    <p className="text-lg sm:text-2xl text-red-400 font-semibold mt-4">
                        Cyber Security ● Software Development ● Leadership
                    </p>
                    
                    {/* Profile Description */}
                    <p className="text-base sm:text-lg mt-4 leading-relaxed">
                        I am a highly skilled Cyber Security Expert with a strong background in Software Development with over
                        17 years of experience in the industry. 
                        Currently pursuing further education in Software Engineering Technology - Artificial Intelligence at Centennial College, 
                        I possess extensive expertise in managing cross-functional teams, 
                        implementing Agile methodologies, and delivering successful projects. 
                        My passion is leading teams to create innovative, secure software solutions 
                        and ensuring seamless project delivery from inception to completion.
                        <br />
                        <br />
                        You are more than welcome to check out my page and portfolios. Please don't hesitate to reach out if you have
                        any questions. Thanks!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;
