import { useState } from "react";


function Navbar(props){


    if(props.day >= 7){
        props.day = props.day % 7;
    }
    const dayName = () => {
    switch(props.day){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        
    }}

    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const formattedDate = `${day}-${month}-${year}`;

    
    

   const cityHandler = (event) => {
    props.onCityChange(event.target.value)
   }

   

    return( <nav className="navbar">
        <div className="container">
        <div className="nav-left">
            <h2>{props.cityData}</h2>
            <h3>{dayName(props.dayName) + ", " + formattedDate.replaceAll("-",".")}</h3>
        </div>
        <div className="nav-right">
            <input type="text" placeholder="Enter city name" />
            <label htmlFor="citySelect">
                <select name="" id="citySelect" onChange={cityHandler} >
                    <option value="Turkey">Şehir Seçiniz</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Izmir">Izmir</option>
                    <option value="Sakarya">Sakarya</option>
                </select>
            </label>
        </div>
        </div>
    </nav> );
}

    


export default Navbar;