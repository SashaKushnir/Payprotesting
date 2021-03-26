import React from 'react'
import { useDispatch } from "react-redux";
import { SportsItem } from "../../redux/sports/sportsReducer";
import s from './SportItem.module.css'

interface SportItemProps {
    sportI: SportsItem
}

export const SportItem: React.FC<SportItemProps> = ({sportI}) => {
    return <div className={s.block}>
        <div className={s.country}>{sportI.country}</div>
        <div className={s.match}>{sportI.match}</div>
        <div className={s.region}>{sportI.region}</div>
        <div className={s.stadium}>{sportI.stadium}</div>
        <div className={s.start}>{sportI.start}</div>
        <div className={s.tournament}>{sportI.tournament}</div>
    </div>
}
