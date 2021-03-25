import { Dispatch } from "redux";
import { sportsActions } from "./sportsActions";
import { weatherAPI } from "../../api/api";
import { GetActionsTypes } from "../weather/weatherReducer";

export interface SportsItem {
    country: string
    match: string
    region: string
    stadium: string
    start: string
    tournament: string
}
interface Sports {
    football?: Array<SportsItem>
    cricket?: Array<SportsItem>
    golf?: Array<SportsItem>
}
interface InitialInfoType {
    sports?: Sports
}
const initial: InitialInfoType = {

}


export const sportsReducer = (info = initial, action: GetActionsTypes<typeof sportsActions>) => {
    switch (action.type) {
        case "SET_SPORTS":
            return {
                ...info,
                sports: action.sports
            }
        default:
            return info
    }
}

export const setSports = () => async (d: Dispatch<GetActionsTypes<typeof sportsActions>>)=> {
    try {
        const res = await weatherAPI.getSportsByCity("Lviv")
        d(sportsActions.setSports(res.data))
        console.log(res)
    } catch (error){
        console.warn(error)
    }
}
