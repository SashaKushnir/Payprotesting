import { WeatherResponse } from "../../types/weatherResponse";

export const weatherActions = {
    setLocation: ()=> ({type:"SET_LOCATION"}) as const,
    setWeather: (weather: WeatherResponse)=> ({type:"SET_WEATHER", weather}) as const
}