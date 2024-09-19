import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Navbar from './Navbar'
import Content from './Content'
import Days from './Days'

function App() {
  const [count, setCount] = useState(0)
  const[temp,setTemp] = useState([]);  
  const[day,setDay] = useState([]);
  const[wind,setWind] = useState([]);
  const[weather,setWeather] = useState([]);
  const[city,setCity] = useState("Turkey");

  const handleCity = (newCity) => {
      setCity(newCity)
  }
  

  const currentDay = new Date().getDay();

  const fetchAPI = async () => {
    const response = await axios.get("https://weather-app-backend-sfiu.onrender.com" + city);
    setTemp(response.data.temp);  
    setDay(response.data.time);
    setWind(response.data.wind);
    setWeather(response.data.weather);
  }

  

  useEffect(() => {
    fetchAPI();
  }, [city])

  return (
     <>
      <Navbar day = {currentDay} onCityChange={handleCity} cityData={city}></Navbar>  
      <Content mainTemp = {Math.floor(temp[0])} wind = {wind[0] + " km/h"} weather = {weather[0]}></Content>
      <Days temps = {temp} weather = {weather}></Days>
      </>
     
  )
}

export default App
