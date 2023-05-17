import React, {useState} from 'react';
import s from './HostVans.module.css'
import {VansType} from "../../Types";
import {Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../api";

export async function loader() {
    return getHostVans()
}

const HostVans = () => {

    const vans = useLoaderData()



    const mappedVans = vans?.map(van => {
        return (
            <Link to={van.id} className={s.hostVanList} key={van.id}>
                    <div className={s.hostVanTile}>
                        <img src={van.imageUrl}/>
                        <div className={s.vanInfo}>
                            <h3>{van.name}</h3>
                            <p>${van.price} / day</p>
                        </div>
                    </div>
            </Link>
        )
    })

    return (
        <div className={s.hostVansWrapper}>
            <h2>Your listed vans</h2>
            <div className={s.mainHostVansWrapper}>
                {mappedVans}
            </div>
        </div>
    );
};

export default HostVans;