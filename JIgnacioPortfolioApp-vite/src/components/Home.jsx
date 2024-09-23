import React from 'react'

function Home() {
    return (
        <>
            <div className="text-white px-10 py-10">
                {/* Intro Text */}
                <div className="w-1/2 text-white px-10 py-10">
                    <p className="text-xl mb-2">Hello there! I am....</p>

                    {/* Name */}
                    <h1 className="text-5xl font-bold">James Ignacio</h1>

                    {/* Role and Skills */}
                    <p className="text-2xl text-red-400 font-semibold mt-4">
                        Cyber Security ● Software Development ● Leadership
                    </p>

                    {/* Profile Description */}
                    <p className="text-lg mt-4 leading-relaxed">
                        I am a highly skilled Cyber Security Expert with strong background in Software Development with over
                        17 years of experience in the industry. 
                        Currently pursuing further education in software engineering - AI, 
                        I possess extensive expertise in managing cross-functional teams, 
                        implementing Agile methodologies, and delivering successful projects. 
                        My passion lies in leading teams to create innovative software solutions 
                        and ensuring seamless project delivery from inception to completion.
                        <p className="text-lg mt-4 leading-relaxed">
                            You are more than welcome to check out my page and portfolios. Please don't hesitate to reach out if you have
                            any questions. Thanks!
                        </p>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Home