import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSports } from "../../redux/sports/sportsReducer";
import { RootState } from "../../redux/store";
import { SportsNameArray } from "./SportsNameArray";

const SportsPage = () => {
    const d = useDispatch()
    useEffect(() => {
        d(setSports())
    }, [])
    let sportsObj = useSelector((state: RootState) => state.sports.sports)
    let obj
    if(sportsObj) {
        obj = Object.keys(sportsObj).map((sportName, index) => {
            // @ts-ignore
            return <SportsNameArray key={index} arrayOfTheSportItem={sportsObj[sportName]} sportName={sportName}/>
        })
    }
    console.log(sportsObj)
    return <div>
        {obj}
    </div>
}
export default React.memo(SportsPage)
