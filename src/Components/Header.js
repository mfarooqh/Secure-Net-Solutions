import './Header.css'; // Ensure any existing custom styles don't conflict
import React from 'react';
import logo from "../Static/Picture1.jpg"

function Header() {
    return (
        <header className="bg-blue-100 text-center py-4 w-screen"> 
            {/* Add background color, text alignment, and padding to the header */}
            <a href='#' className='flex justify-center'>
                <img src={logo}></img>
            </a>
            <nav>
                <ul className="flex justify-between space-x-4 mt-6 p-4">
                    <div className="flex gap-4"> 
                        {/* Display flex and centering nav items, also adds spacing */}
                        <li><a href="#Home" className="text-blue-700 hover:text-blue-900">Home</a></li>
                        <li><a href="#About" className="text-blue-700 hover:text-blue-900">About</a></li>
                        <li><a href="#Services" className="text-blue-700 hover:text-blue-900">Services</a></li>
                    </div>
                    <div>
                        <li><a href="#Signin" className="justify-left text-blue-700 hover:text-blue-900">Sign in</a></li>
                    </div>
                </ul>
            </nav>

        </header>
    );
}

export default Header;