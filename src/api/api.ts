import axios from "axios";

const BaseURL = "http://api.weatherapi.com/v1"
const apiKey = "05a577d6122147639a9195535212203"

export const instanceForWeatherApi = axios.create({
    baseURL: BaseURL
})

export const weatherAPI = {
        getWeatherByCity: (city: string) =>
            instanceForWeatherApi.get(`/current.json?key=${apiKey}&q=${city}`)
                .then(res => res.data),
        getSportsByCity: (city: string) =>
            instanceForWeatherApi.get(`/sports.json?key=${apiKey}&q=${city}`)
}