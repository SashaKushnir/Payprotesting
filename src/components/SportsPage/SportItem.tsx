import React from 'react'
import { useDispatch } from "react-redux";
import { SportsItem } from "../../redux/sports/sportsReducer";
import s from './SportsNameArray.module.css'

interface SportItemProps {
    sportI: SportsItem
}

export const SportItem: React.FC<SportItemProps> = ({sportI}) => {
    return <div>
        <div>{sportI.country}</div>
        <div>{sportI.match}</div>
        <div>{sportI.region}</div>
        <div>{sportI.stadium}</div>
        <div>{sportI.start}</div>
        <div>{sportI.tournament}</div>
    </div>
}
