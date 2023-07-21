import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import "./App.css"
const ViewWeatherForecast = () => {
  const [cityName, setCityName] = useState("London");
  const fetchWeather = async () => {
    const  data  = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=546e563c55b092f93e8ef6e0f201d4e7`
    );
    return data.data;
  };

  const { data, isLoading, error } = useQuery(
    ["weather", cityName],
    fetchWeather
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const searchCity =(e)=>{
  if(e.key === "Enter"){
    setCityName(e.target.value)
  }
}
  console.log("Data", data);

  return (
    <>
      <div className="container">
        
        <input type="text" placeholder="Enter Your Text Here" className="enter-word"  onKeyDown={searchCity}/>
        <div className="top">
          <div className="left">
            <h2>{data?.name}</h2>
            <h2>{data?.main.temp} <sup>O</sup>C</h2>
          </div>
          <div className="right">
            <p>{data?.weather[0].description}</p>
            
          </div>
        </div>
        <div className="bottom">
          <div className="humidity">
            <h5>{data?.main.humidity}%</h5>
            <p>Humidity</p>
          </div>
          <div className="visibility">
            <h5>{data?.visibility}km</h5>
            <p>Visibility</p>
          </div>
          <div className="feel_like">
            <h5>{data?.main.feels_like}<sup>O</sup>C</h5>
            <p>feel_like</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWeatherForecast;
