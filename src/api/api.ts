import axios from "axios";

const BaseURL = ""
const apiKey = "AIzaSyAxKQdgD97_LO8QP2kxxjTVglcRNXy2vKA"

export const bu_wc_h = axios.create({
    baseURL: BaseURL,
    headers: {
        'API-KEY': 'fa27d1b2-0d5c-41e1-8165-6f8e31138afd'
    }
})

export const  getLocation = {
    getCity: () => bu_wc_h.get('')
}
export const weatherAPI = {
        getWeatherBuCity: (city: string) =>
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
}