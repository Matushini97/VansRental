import React from 'react';
import s from './HostLayout.module.css'
import {NavLink, Outlet} from "react-router-dom";

const HostLayout = () => {
    const ActiveStyle = {
        color: "#161616",
        textDecoration: "underline 3px"
    }

    return (
        <>
            <nav className={s.hostNav}>
                <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='.' end>Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='income'>Income</NavLink>
                <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='vans'>Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='reviews'>Reviews</NavLink>
            </nav>
            <Outlet/>
        </>

    );
};

export default HostLayout;

