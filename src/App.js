import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState({});
  const [data, setData] = useState("");

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=9646e537e173dcc07b13559e04c01cd2`;

  const fetchData = () => {
    axios.get(BASE_URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetchData();
    }
  };

  return (
    <div className="bg-sunset bg-center bg-cover h-screen w-screen">
      <div className="max-w-3xl mx-auto pt-5 px-3">
        <input
          type="text"
          className="outline-none rounded-2xl bg-transparent border-2 pt-1 pb-2 px-5 capitalize mx-auto block w-2/5 mb-28"
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={getWeather}
          placeholder="Enter Location"
        />
        <div className="flex justify-between mb-64">
          <div className="w-2/6 flex flex-col items-center mb-20">
            <p className=" text-xl mb-1">{data.name}</p>
            <p className="text-6xl font-medium">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </p>
          </div>
          <p className="text-3xl w-fit mr-3 mb-5 self-center">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </p>
        </div>
        {data.name !== undefined && (
          <div className="flex justify-between px-12 py-3 bg-white bg-opacity-20 rounded-md mx-2">
            <div className="flex flex-col justify-between items-center">
              <div className="text-lg font-medium">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
              </div>
              <div>Feels Like</div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="text-lg font-medium">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
              </div>
              <div>Humidity</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} KPH</p>
                ) : null}
              </div>
              <div>Wind Speed</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
