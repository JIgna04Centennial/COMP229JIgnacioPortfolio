import React from 'react';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Just log the submission and redirect manually.
        console.log('Form submitted.');
        window.location.href = '/'; // Redirect to the home page
    };

    return (
        <div className="bg-gray-900 text-white py-10 bg-opacity-65">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded-md"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded-md"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded-md"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded-md"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
