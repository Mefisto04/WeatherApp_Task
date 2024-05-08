import React from 'react';
import Navbar from "../navbar.jsx";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fake Service Cards */}
            <ServiceCard title="Daily Forecast" description="Get accurate daily weather forecasts for any location." />
            <ServiceCard title="Hourly Updates" description="Stay informed with hourly updates on current weather conditions." />
            <ServiceCard title="Severe Weather Alerts" description="Receive alerts for severe weather events in your area." />
            <ServiceCard title="Customized Reports" description="Create customized weather reports tailored to your needs." />
            <ServiceCard title="Travel Weather" description="Plan your travels with detailed weather information for destinations worldwide." />
            <ServiceCard title="Outdoor Event Planning" description="Ensure your outdoor events go smoothly with weather forecasts tailored to your event date and location." />
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServicesPage;
