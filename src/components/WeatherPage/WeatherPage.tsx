import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { WeatherCurrentComponent } from "./WeatherCurrent/WeatherCurrent";

export const WeatherPage = () => {
    const weather = useSelector((state:RootState) => state.weather.weather?.current)
    let weatherCurrent
    if(weather){
         weatherCurrent = Object.keys(weather).map((key,index) => {
             // @ts-ignore
             return <WeatherCurrentComponent value={weather[key]} keyVal={key} key={index}/>
         })
    }
    return <div>
        {weatherCurrent}
    </div>
}