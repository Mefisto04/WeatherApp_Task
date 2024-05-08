import React from 'react';
import Navbar from "../navbar.jsx";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
              <p className="text-gray-700">You can contact us through the following channels:</p>
              <ul className="mt-2">
                <li>Email: info@weatherapp.com</li>
                <li>Phone: +1234567890</li>
                <li>Address: 123 Weather St, City, Country</li>
              </ul>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
                <p className="text-gray-700">Stay updated with our latest news and updates:</p>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Instagram</a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Send us a message</h2>
              <form className="mt-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-800 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-800 mb-2">Your Email</label>
                  <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-800 mb-2">Your Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500"></textarea>
                </div>
                <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
