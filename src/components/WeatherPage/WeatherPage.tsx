import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {WeatherCurrentComponent} from "./WeatherCurrent/WeatherCurrent";
import styles from "./WeatherPage.module.css"

export const WeatherPage = () => {
    const weather = useSelector((state: RootState) => state.weather.weather?.current)
    const location = useSelector((state: RootState) => state.weather.weather?.location)
    let weatherCurrent
    if (weather) {
        weatherCurrent = Object.keys(weather).map((key, index) => {
            // @ts-ignore
            return <WeatherCurrentComponent value={weather[key]} keyVal={key} key={index}/>
        })
    }
    return <div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.name}>{location?.country}, {location?.name}</div>
            <div className={styles.time}>{location?.localtime}</div>
            <div className={styles.icon_block}>
                <img src={weather?.condition.icon} className={styles.icon}/>
                <div className={styles.temp}>
                    <div className={styles.temp_c}>{weather?.temp_c}°</div>
                    <div className={styles.temp_text}>RealFeel {weather?.feelslike_c}°</div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.block}>
                <span className={styles.details}>Wind</span>
                <span className={styles.value}>{weather?.wind_kph}</span>
            </div>
            <div className={styles.block}>
                <span className={styles.details}>Pressure</span>
                <span className={styles.value}>{weather?.pressure_mb}</span>
            </div>
            <div className={styles.block}>
                <span className={styles.details}>Wind_degree</span>
                <span className={styles.value}>{weather?.wind_degree}</span>
            </div>
            <div className={styles.block}>
                <span className={styles.details}>Humidity</span>
                <span className={styles.value}>{weather?.humidity}</span>
            </div>

        </div>
        {/*{weatherCurrent}*/}
    </div>
}
