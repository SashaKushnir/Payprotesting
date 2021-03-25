import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import s from './NavBar.module.css'

export const HeaderNavBar = () => {
    let {url} = useRouteMatch();
    return <nav className={s.navigation}>
        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/location`}>
            <div className={s.division}> Location  </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/weather`}>
            <div> Weather </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/sports`}>
            <div> Sports </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlinkRight} to={`${url}/reports`}>
            <div>Reports</div>
        </NavLink>
    </nav>
}