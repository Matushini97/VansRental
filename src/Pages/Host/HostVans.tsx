import React, {useState} from 'react';
import s from './HostVans.module.css'
import {VansType} from "../../Types";
import {Link, NavLink} from "react-router-dom";

const HostVans = () => {

    const [vans, setVans] = useState<VansType[] | null>(null)

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const mappedVans = vans?.map(van => {
        return (
            <Link to={`/host/vans/${van.id}`} className={s.hostVanList}>
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