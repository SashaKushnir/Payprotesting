import React, { useEffect, useState, } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import { setWeather } from "./redux/weather/weatherReducer";
import { WeatherPage } from "./components/WeatherPage/WeatherPage";
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'
import { MyPage } from "./components/markup/MyPage/MyPage";

export const App = () => {
    let d = useDispatch()
    useEffect(() => {
        d(setWeather())
    }, [])
    return <BrowserRouter>
        <div className="App">

            <Switch>
                <Redirect exact from="/" to="/content"/>
                <Route path='/login' render={() => <div>Authorisation</div>}/>
                <Route path='/content' render={() => <MyPage/>}/>
                <Route path='*' render={() => <div>Error, empty link</div>}/>
            </Switch>
        </div>
    </BrowserRouter>
}