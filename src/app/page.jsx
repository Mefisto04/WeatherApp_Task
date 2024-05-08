'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../app/navbar.jsx";

function getCurrentDate() {
  const currentDate = new Date();
  const options = { month: "long" };
  const monthName = currentDate.toLocaleString("en-US", options);
  const date = new Date().getDate() + ", " + monthName;
  return date;
}

const Home = () => {
  const date = getCurrentDate();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("lahore");

  async function fetchData(cityName) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/weather?address=" + cityName
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchDataByCoordinates(latitude, longitude) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/weather?lat=${latitude}&lon=${longitude}`
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchDataByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-screen flex flex-col justify-center items-center text-white">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData(city);
            }}
          >
            <input
              className="border rounded px-4 py-2 focus:outline-none focus:border-gray-400"
              placeholder="Enter city name"
              type="text"
              id="cityName"
              name="cityName"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-300 focus:outline-none">
              Search
            </button>
          </form>
        </section>
        <section className="flex flex-col items-center">
          {weatherData && weatherData.weather && weatherData.weather[0] ? (
            <>
              <div className="flex items-center mb-4">
                <i
                  className={`wi ${
                    weatherData?.weather[0]?.description === "rain" ||
                    weatherData?.weather[0]?.description === "fog"
                      ? "wi-day-" + weatherData?.weather[0]?.description
                      : "wi-day-cloudy"
                  } text-6xl`}
                ></i>
                <div className="ml-4 text-6xl">
                  {(weatherData?.main?.temp - 273.5).toFixed(2)}
                  <span className="text-4xl">&deg;C</span>
                </div>
              </div>
              <div className="text-2xl mb-4">
                {weatherData?.weather[0]?.description?.toUpperCase()}
              </div>
              <div className="text-xl">
                {weatherData?.name}, {date}
              </div>
            </>
          ) : (
            <div className="text-3xl">Loading...</div>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
