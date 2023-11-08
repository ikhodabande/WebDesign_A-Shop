import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assests/search.png';
import clear_icon from '../Assests/clear.png';
import clouds_icon from '../Assests/clouds.png';
import drizzle_icon from '../Assests/drizzle.png';
import humidity_icon from '../Assests/humidity.png';
import mist_icon from '../Assests/mist.png';
import rain_icon from '../Assests/rain.png';
import snow_icon from '../Assests/snow.png';
import wind_icon from '../Assests/wind.png';


const WeatherApp = () => {
 const api_key = "638d3770f32a1289f8c41b834ea30bf9";

 const [wicon,setWicon] = useState(clouds_icon)

  const search =async()=>{
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === "")
    {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    
    
    const weather =  document.querySelector(".weather");
    const error = document.querySelector('.error')

    if(response.status === 404 ){
      error.style.display = "block";
      weather.style.display = "none";
    }else {
      weather.style.display = "flex";
      error.style.display = "none";
    }
 

    const humidity = document.getElementsByClassName('humidity-rate');
    const wind = document.getElementsByClassName('wind');
    const temprature = document.getElementsByClassName('temprature');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temprature[0].innerHTML = data.main.temp + "°c";
    location[0].innerHTML = data.name ;



    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(clouds_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
    }
    else
    {
      setWicon(clear_icon);
    }




  }
  


  return (
    <div className='container'>
       <div class="card">
         <div className="topBar">  
            <input className='cityInput' type="text" placeholder="enter city name" spellcheck="false"/>
              <div className="search">
                <button onClick={()=>{search()}}><img src={search_icon} alt=""/></button>
                   </div>
                  <div className="error">
                    <p>Invalid city name you enterd, please try again.</p>
                    </div>
           </div>
    <div className="weather">
      <img src={wicon} className="weather-icone" alt=""/>
      <h1 className="temprature">22°c</h1>
      <h2 className="weather-location">New York</h2>
      <div className="details">
        <div className="col">
          <img src={humidity_icon} alt=""/>
          <div>
            <p className="humidity-rate">50%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt=""/>
          <div>
            <p className="wind">15 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )

  

}

export default WeatherApp;