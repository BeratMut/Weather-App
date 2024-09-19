import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import mainlyClear from "./assets/mainly-clear.png";
import partlyCloud from "./assets/partly-cloudy.png";
import fair from "./assets/fair.png"
import drizzle from "./assets/drizzle.png"
import heavyRain from "./assets/heavy-rain.png"
import rain from "./assets/rain.png"
import overcast from "./assets/overcast.png"
import thunderstorm from "./assets/thunderstorm.png"
import unknown from "./assets/help.png"
import fog from "./assets/fog.png"
import snow from "./assets/snow.png"

import { useEffect, useState } from 'react';

function Content(props){

    const weatherInfo = {
        picture: unknown,
        text: 'Unrecognized weather code',
    }

    const weather = () => {
        switch(props.weather){
            case 0:
                return weatherInfo.picture = fair , weatherInfo.text = "Fair";
                break;
            case 1:
                return weatherInfo.picture = mainlyClear, weatherInfo.text = "Mainly Clear";
                break;
            case 2:
                return weatherInfo.picture = partlyCloud, weatherInfo.text = "Partly Cloud";
                break;
            case 3:
                return weatherInfo.picture = overcast, weatherInfo.text = "Overcast";
                break;
            case 45:
                return weatherInfo.picture = fog, weatherInfo.text = "Foggy";
                break;
            case 51:
                return weatherInfo.picture = drizzle, weatherInfo.text = "Drizzle";
                break;
            case 55:
                return weatherInfo.picture = drizzle, weatherInfo.text = "Drizzle";
                break;
            case 53:
                return weatherInfo.picture = drizzle, weatherInfo.text = "Drizzle";
                break;
            case 63:
                return weatherInfo.picture = rain, weatherInfo.text = "Rain";
                break;
            case 65:
                return weatherInfo.picture = heavyRain, weatherInfo.text = "Heavy Rain";
                break;
            case 71:
                return weatherInfo.picture = snow, weatherInfo.text = "Snow";
                break;
            case 73:
                return weatherInfo.picture = snow, weatherInfo.text = "Snow";
                break;
            case 80:
                return weatherInfo.picture = rain, weatherInfo.text = "Rain";
                break;
            case 95:
                return weatherInfo.picture = thunderstorm, weatherInfo.text = "Thunderstorm";
                break;
            
        }
    }
    const firstTemp = props.mainTemp;
    const[temp,setTemp] = useState(firstTemp)
    const[unit,setUnit] = useState("°C")
    
    useEffect(() => {
        setTemp(firstTemp)
    }, [props.mainTemp])

    const FtoC = () =>{
        setTemp(firstTemp)
        setUnit("°C");
    }
   
    const CtoF = () => {
        setTemp((9/5) * firstTemp + 32)
        setUnit("°F")
    }

    weather();

    return( <main className="content">
        <div className="content-left">
            <div className="temp"><h2>{Math.floor(temp)}</h2></div>
            <div className="specific"><h3 className='cf'> <span className='celsius' onClick={FtoC}>°C</span> | <span className='fahrenheit'onClick={CtoF}>°F</span></h3> <h3>{weatherInfo.text}</h3></div>
        </div>
        <div className="content-right">
            <div className="img"> <img src={weatherInfo.picture} alt="" height={150} width={150} /> </div>
            <div className="informations"><h3>Feels like: {Math.floor(temp) + "" + unit } </h3><h3>Wind: {props.wind} </h3></div>
        </div>
    </main> );
}


export default Content;