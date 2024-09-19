import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: ["https://weather-app-frontend-2ky8.onrender.com"],
}

app.use(cors(corsOptions));

let time;
let temp;
let wind;
let weather;

app.get("/apiTurkey", async (req, res) => {
    

    

    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=39&longitude=35&daily=temperature_2m_max&daily=wind_speed_10m_max&daily=weather_code&timezone=Europe%2FMoscow`)
        
    time = response.data.daily.time
    temp = response.data.daily.temperature_2m_max
    wind = response.data.daily.wind_speed_10m_max
    weather = response.data.daily.weather_code
    res.json({time: time, temp: temp, wind: wind, weather: weather});
})


app.get("/apiIstanbul", async (req,res) => {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&daily=temperature_2m_max&daily=wind_speed_10m_max&daily=weather_code&timezone=Europe%2FMoscow")

   time = response.data.daily.time
    temp = response.data.daily.temperature_2m_max
    wind = response.data.daily.wind_speed_10m_max
    weather = response.data.daily.weather_code
    res.json({time: time, temp: temp, wind: wind, weather: weather});
})

app.get("/apiAnkara", async (req,res) => {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=39.9199&longitude=32.8543&daily=temperature_2m_max&daily=wind_speed_10m_max&daily=weather_code&timezone=Europe%2FMoscow")

   time = response.data.daily.time
    temp = response.data.daily.temperature_2m_max
    wind = response.data.daily.wind_speed_10m_max
    weather = response.data.daily.weather_code
    res.json({time: time, temp: temp, wind: wind, weather: weather});
})

app.get("/apiIzmir", async (req,res) => {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=38.4127&longitude=27.1384&daily=temperature_2m_max&daily=wind_speed_10m_max&daily=weather_code&timezone=Europe%2FMoscow")

   time = response.data.daily.time
    temp = response.data.daily.temperature_2m_max
    wind = response.data.daily.wind_speed_10m_max
    weather = response.data.daily.weather_code
    res.json({time: time, temp: temp, wind: wind, weather: weather});
})

app.get("/apiSakarya", async (req,res) => {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=39.5033&longitude=32.0758&daily=temperature_2m_max&daily=wind_speed_10m_max&daily=weather_code&timezone=Europe%2FMoscow")

   time = response.data.daily.time
    temp = response.data.daily.temperature_2m_max
    wind = response.data.daily.wind_speed_10m_max
    weather = response.data.daily.weather_code
    res.json({time: time, temp: temp, wind: wind, weather: weather});
})

app.listen(port, () => {
    console.log("Server started on port 8080");
})

