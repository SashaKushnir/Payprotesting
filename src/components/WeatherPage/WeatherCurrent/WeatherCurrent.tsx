import React from 'react'
import { WeatherCondition } from '../../../types/weatherResponse'


interface WeatherCurrentProps {
    keyVal: string
    value: any
}

export const WeatherCurrentComponent:React.FC<WeatherCurrentProps> = ({keyVal,value}) => {
    if(keyVal === "condition" ) {
        return <div>
            {keyVal}:
                <div>text: {value.text}</div>
                <img src={value.icon} alt={"condition photo"}/>
        </div>
    }
    return <div>
        {keyVal}: {value}
    </div>
}