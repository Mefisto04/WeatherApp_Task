import React from 'react';
import Navbar from "../navbar.jsx";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Weather App</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Weather App is your go-to destination for accurate and up-to-date weather information. 
            Whether you are planning your next outdoor adventure or just want to stay informed about 
            the current weather conditions, our app has got you covered. With real-time data from 
            reliable sources, you can trust Weather App to provide you with the information you need, 
            when you need it.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our team of weather enthusiasts is dedicated to delivering a user-friendly experience, 
            ensuring that you can easily access the weather forecast for any location around the globe. 
            Stay ahead of the weather and make informed decisions with Weather App.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
