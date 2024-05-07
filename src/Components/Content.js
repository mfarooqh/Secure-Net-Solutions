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
                    <h2 className="text-2xl font-bold">Cloud Integration</h2>
                    <p>Seamlessly integrate powerful cloud services to enhance your workflow.</p>
                </div>
                <div className="service">
                    <h2 className="text-2xl font-bold">Cybersecurity</h2>
                    <p>Advanced protection measures to safeguard your digital assets.</p>
                </div>
                <div className="service">
                    <h2 className="text-2xl font-bold">Data Analytics</h2>
                    <p>Transform your data into actionable insights with our comprehensive analytics tools.</p>
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
