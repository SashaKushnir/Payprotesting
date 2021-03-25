import React, { Suspense } from 'react'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import s from './Content.module.css'
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { WeatherPage } from "../../WeatherPage/WeatherPage";
const LocationPage = React.lazy(() => import('../../LocationPage/LocationPage'));
const SportsPage = React.lazy(()=> import('../../SportsPage/SportsPage'))
export const MyPage = () => {
    let {url} = useRouteMatch()
    return <div className={s.wrap}>
        <div className={s.content}>
            <Header/>
            <Switch>
                <Redirect exact from={`${url}`} to={`${url}/weather`} />
                <Route path={`${url}/location`} render={() => <Suspense fallback={<div>Loading...</div>}><LocationPage />
                </Suspense>} />
                <Route path={`${url}/sports`} render={() => <Suspense fallback={<div>Loading...</div>}>
                <SportsPage/></Suspense>}/>
                <Route path={`${url}/weather`} render={() => <div><WeatherPage/></div>}/>
            </Switch>
        </div>
        <div className={s.footer}>
            <Footer/>
        </div>

    </div>
}