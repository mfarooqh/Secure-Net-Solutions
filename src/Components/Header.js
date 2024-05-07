import './Header.css'; // Ensure any existing custom styles don't conflict
import React from 'react';

function Header() {
    return (
        <header className="bg-blue-100 text-center py-4 w-screen"> 
            {/* Add background color, text alignment, and padding to the header */}
            <h1 className="text-6xl font-bold">SecureNet Solutions</h1>
            <nav>
                <ul className="flex justify-right space-x-4 mt-6">
                    {/* Display flex and centering nav items, also adds spacing */}
                    <li><a href="#Home" className="text-blue-700 hover:text-blue-900">Home</a></li>
                    <li><a href="#About" className="text-blue-700 hover:text-blue-900">About</a></li>
                    <li><a href="#Services" className="text-blue-700 hover:text-blue-900">Services</a></li>
                    {/* <li><a href="#Signin" className="justify-left text-blue-700 hover:text-blue-900">Sign in</a></li> */}
                </ul>
            </nav>
            <nav>
                <ul ClassName="flex items-center gap-6">
                <li><a href="#Signin" className="text-black-1000 hover:text-black-900 justify ">Sign in</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;