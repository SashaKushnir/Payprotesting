import { Dispatch } from "redux";
import { infoActions } from "./infoActions";
import { getLocation, weatherAPI } from "../../api/api";
const NodeGeocoder = require('node-geocoder');

const initial = {}
//609ce24ffd4c4d8f9fe112732212303

export const infoReducer = (info = initial, action : GetActionsTypes<typeof infoActions>) => {
    switch (action.type) {
        default:
            return info
    }


}

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export const setData = () => async (d: Dispatch<GetActionsTypes<typeof infoActions>>) => {
    try {
        const res = await weatherAPI.getWeatherBuCity("Lviv")
        console.log(res)
    } catch (error){
        console.warn(error)
    }
}
