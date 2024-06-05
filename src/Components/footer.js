import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">CONNECT WITH US</h2>
            <form className="flex flex-col">
              <input type="text" placeholder="First Name" className="mb-2 p-2 rounded text-black" />
              <input type="text" placeholder="Last Name" className="mb-2 p-2 rounded text-black" />
              <input type="email" placeholder="Email Address" className="mb-2 p-2 rounded text-black" />
              <input type="text" placeholder="Organization Name" className="mb-2 p-2 rounded text-black" />
              <input type="tel" placeholder="Telephone Number" className="mb-2 p-2 rounded text-black" />
              <textarea placeholder="Message" className="mb-2 p-2 rounded"></textarea>
              <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white p-2 rounded">SUBMIT</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">OUR CONTACT</h2>
            <p className="mb-2"><strong>Email Address:</strong> Daudi1999@gmail.com</p>
            <p className="mb-2"><strong>Location:</strong> Irving, Texas</p>
            <p className="mb-2"><strong>Call Us:</strong> (972) 330-6398</p>
          </div>
        </div>
        <p className="text-center mt-4">Please contact us with any questions you have regarding our services.</p>
      </div>
    </footer>
  );
}

export default Footer;
