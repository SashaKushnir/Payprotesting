import React from 'react'
import { useDispatch } from "react-redux";
import { SportsItem } from "../../redux/sports/sportsReducer";
import s from './SportsNameArray.module.css'
import { SportItem } from "./SportItem";

interface SportsNameArrayProps {
    arrayOfTheSportItem: Array<SportsItem>
    sportName: string
}

export const SportsNameArray: React.FC<SportsNameArrayProps> = ({arrayOfTheSportItem,sportName}) => {
    const d = useDispatch()
    const sportItemArray = arrayOfTheSportItem.map((obj,index)=>{
        // @ts-ignore
        return <SportItem key={index} sportI={obj}/>
    })
    return <div>
        <div>{sportName}: </div>
        <div className ={s.sportsArray}>
            {sportItemArray}
        </div>
    </div>
}
