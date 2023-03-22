import React, {useState} from 'react';
import s from './HostVanDetail.module.css'
import {Link, NavLink, Outlet, useOutletContext, useParams} from "react-router-dom";
import type {VansType} from "../../Types";
import Loader from "../../Components/Loader";


// https://reactrouter.com/en/main/hooks/use-outlet-context how to send context with TS from parent to child
type ContextType = { currentVan: VansType | null }

const HostVanDetail = () => {

    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState<VansType | null>(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    const btnColor = currentVan?.type === 'simple' ? s.simple : currentVan?.type === 'luxury' ? s.luxury : s.rugged

    let vanType
    if (currentVan) {
        vanType = currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)
    }

    if (!currentVan) {
        return <Loader/>
    }

    const ActiveStyle = {
        color: "#161616",
        textDecoration: "underline 3px"
    }

    return (
        <section className={s.section}>
            <Link to='..' relative="path" className={s.backBtn}>&larr; <span>Back to all vans</span></Link>
            <div className={s.currentVanWrapper}>
                <div className={s.currentVan}>
                    <img src={currentVan.imageUrl}/>
                    <div className={s.infoWrapper}>
                        <p className={`${s.vanType} ${btnColor}`}>{vanType}</p>
                        <h2>{currentVan.name}</h2>
                        <p>${currentVan.price}<span>/day</span></p>
                    </div>
                </div>
                <nav className={s.hostVanDetailNav}>
                    <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='.' end>Details</NavLink>
                    <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='pricing'
                             end>Pricing</NavLink>
                    <NavLink style={({isActive}) => isActive ? ActiveStyle : undefined} to='photos' end>Photos</NavLink>
                </nav>
                <Outlet context={{currentVan}}/>
            </div>
        </section>

    );
};

export default HostVanDetail;

export function useCurrentVan() {
    return useOutletContext<ContextType>()
}