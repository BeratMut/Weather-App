import mainlyClear from "./assets/mainly-clear.png";
import partlyCloud from "./assets/partly-cloudy.png";
import fair from "./assets/fair.png"
import Day from "./Day";

function Days(props){

    const day = new Date().getDay();
    const currentDay = (day) => {

        if(day >= 7){
            day = day % 7;
        }

        switch(day){
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
            
        }
    }

    return( <main className="days">
        <Day day = {currentDay(day+1)} temp = {props.temps[1]} weather = {props.weather[1]}></Day>
        <Day day = {currentDay(day+2)} temp = {props.temps[2]} weather = {props.weather[2]}></Day>
        <Day day = {currentDay(day+3)} temp = {props.temps[3]} weather = {props.weather[3]}></Day>
        <Day day = {currentDay(day+4)} temp = {props.temps[4]} weather = {props.weather[4]}></Day>
        <Day day = {currentDay(day+5)}  temp ={props.temps[5]} weather = {props.weather[5]}></Day>
    </main> )


}


export default Days;