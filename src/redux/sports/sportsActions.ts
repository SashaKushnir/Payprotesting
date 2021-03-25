import { WeatherResponse } from "../../types/weatherResponse";

export const sportsActions = {
    setSports: (sports: any)=> ({type:"SET_SPORTS", sports}) as const
}