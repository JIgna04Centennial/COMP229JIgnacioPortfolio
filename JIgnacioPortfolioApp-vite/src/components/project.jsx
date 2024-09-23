import React from 'react'

function project() {
    return (
        <div className="text-white px-10 py-10 flex justify-center ">
            <div className="w-1/2 text-white px-10 py-10 bg-black rounded-lg bg-opacity-85 ">
                <h1 className="text-5xl font-bold">Current Projects</h1>
                {/* Role and Skills */}
                <p className="text-2xl text-red-400 font-semibold mt-4">
                    Academics
                </p>
                {/* Profile Description */}
                <p className="text-lg mt-4 leading-relaxed">
                    React Web Development - Professional Portfolio
                </p>
            </div>
        </div>
    )
}

export default project