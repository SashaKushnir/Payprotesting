const a = {
    current: {
        cloud: 0,
        condition: {
            code: 1000,
            icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
            text: "Clear"
        },
        feelslike_c: 0.5,
        feelslike_f: 32.9,
        gust_kph: 18.4,
        gust_mph: 11.4,
        humidity: 35,
        is_day: 0,
        last_updated: "2021-03-24 18:45",
        last_updated_epoch: 1616604313,
        precip_in: 0,
        precip_mm: 0,
        pressure_in: 30.6,
        pressure_mb: 1020,
        temp_c: 4,
        temp_f: 39.2,
        uv: 2,
        vis_km: 10,
        vis_miles: 6,
        wind_degree: 30,
        wind_dir: "NNE",
        wind_kph: 11.2,
        wind_mph: 6.9
    },
    location: {
        country: "Ukraine",
        lat: 49.83,
        localtime: "2021-03-24 18:51",
        localtime_epoch: 1616604681,
        lon: 24,
        name: "Lviv",
        region: "",
        tz_id: "Europe/Kiev"
    }
}
export type WeatherCondition = typeof a.current.condition
export type WeatherCurrent = typeof a.current & {
    condition: WeatherCondition
}
export interface WeatherResponse {
    current: WeatherCurrent
    location: typeof a.location
}
