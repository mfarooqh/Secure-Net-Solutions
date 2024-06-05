import React from 'react';

function HomePage() {
    return (
        <div>
            <div className="bg-blue-800 text-white p-8 text-center">
                <h1 className="text-4xl font-bold">Welcome to SecureNet Solutions</h1>
                <p className="text-xl mt-2">Innovative IT solutions to streamline your business operations.</p>
                <button className="mt-4 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </button>
            </div>

            <div className="p-8 bg-blue-700 text-white grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="service">
                    <h2 className="text-2xl font-bold">Website Design</h2>
                    <p>Designing visually stunning, user-centric websites to enhance your online presence.</p>
                </div>
                <div className="service">
                    <h2 className="text-2xl font-bold">AI Compliance</h2>
                    <p>Implementing AI ethically and legally, ensuring adherence to regulatory standards.</p>
                </div>
                <div className="service">
                    <h2 className="text-2xl font-bold">Cloud Compliance</h2>
                    <p>Maintaining robust regulatory compliance within your cloud infrastructure.</p>
                </div>
                <div className="service">
                <h2 className="text-2xl font-bold">Service Monitoring</h2>
                    <p>Real-time service monitoring to ensure optimal performance and reliability.</p>
                </div>
                <div className="service">
                <h2 className="text-2xl font-bold">Cloud Migration</h2>
                    <p>Effortlessly migrate to the cloud with minimal disruption and maximum efficiency.</p>
                </div>
                <div className="service">
                <h2 className="text-2xl font-bold">Cloud Infrastructure Planning and Setup</h2>
                    <p>Strategically plan and set up your cloud infrastructure for optimal performance.</p>
                </div>
            </div>

            <div className="bg-blue-600 text-white p-8 text-center">
                <h2 className="text-3xl font-bold">Ready to get started?</h2>
                <p className="text-xl mt-2">Join us today and revolutionize your business operations.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default HomePage;
