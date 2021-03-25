import { Dispatch } from "redux";
import { weatherActions } from "./weatherActions";
import { weatherAPI } from "../../api/api";
import { WeatherResponse } from "../../types/weatherResponse";
const NodeGeocoder = require('node-geocoder');

interface InitialInfoType {
    weather?: WeatherResponse
}
const initial: InitialInfoType = {

}
//609ce24ffd4c4d8f9fe112732212303

export const weatherReducer = (info = initial, action: GetActionsTypes<typeof weatherActions>) => {
    switch (action.type) {
        case "SET_WEATHER":
            return {
                ...info,
                weather: {...action.weather}
            }
        default:
            return info
    }
}

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export const setWeather = () => async (d: Dispatch<GetActionsTypes<typeof weatherActions>>) => {
    try {
        const res:WeatherResponse = await weatherAPI.getWeatherByCity("Lviv")
        d(weatherActions.setWeather(res))
    } catch (error){
    console.warn(error)
    }
}
