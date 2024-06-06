import './Header.css'; // Ensure any existing custom styles don't conflict
import React from 'react';
import logo from "../Static/Picture1.jpg"

function Header() {
    return (
        <header className="bg-blue-300 text-center py-4 w-screen"> 
            {/* Add background color, text alignment, and padding to the header */}
            <a href='#' className='flex justify-center'>
                <img src={logo}></img>
            </a>
            <nav>
                <ul className="flex justify-between space-x-4 mt-6 p-2">
                    <div className="flex gap-4"> 
                        {/* Display flex and centering nav items, also adds spacing */}
                        <li><a href="#Home" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded border border-blue-500">Home</a></li>
                        <li><a href="#About" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded border border-blue-500">About</a></li>
                        <li><a href="#Services" className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded border border-blue-500">Services</a></li>
                    </div>
                    <div>
                        <li><a href="https://v4qfx3-5173.csb.app/" className="justify-left bg-blue-700 hover:bg-blue-600 text-white p-2 rounded border border-blue-500">Sign in</a></li>
                    </div>
                </ul>
            </nav>

        </header>
    );
}

export default Header;