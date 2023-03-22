import React, {useEffect, useState} from 'react';
import s from './Vans.module.css'
import {VansType} from "../../Types";
import VanCard from "../../Components/VanCard";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import Loader from "../../Components/Loader";
import {getVans} from "../../api";



const Vans = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState<VansType[] | null>(null)
    const typeFilter = searchParams.get("type")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)

            } catch(err) {
                console.log(err)
                // @ts-ignore
                setError(err)
            }  finally {
                setLoading(false)
            }
            setLoading(false)
        }

        loadVans()
    }, [])

    const displayedVans = typeFilter ? vans?.filter(van => van.type === typeFilter) : vans

    const vanElement = displayedVans?.map(van => {
        return (
            <VanCard key={van.id}
                     id={van.id}
                     imageUrl={van.imageUrl}
                     name={van.name}
                     price={van.price}
                     type={van.type}
                     search = {`?${searchParams.toString()}`}
                     typeFilter = {typeFilter}
            />

        )
    })

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className={s.vansWrapper}>

                    <h2>Explore our van options</h2>
                    <div className={s.filters}>
                        <button onClick={() => setSearchParams({type: "simple"})} className={`${s.filterBtn} ${s.simple} ${typeFilter === 'simple' ? s.selected : ''}`}>Simple</button>
                        <button onClick={() => setSearchParams({type: "luxury"})} className={`${s.filterBtn} ${s.luxury} ${typeFilter === 'luxury' ? s.selected : ''}`}>Luxury</button>
                        <button onClick={() => setSearchParams({type: "rugged"})} className={`${s.filterBtn} ${s.rugged} ${typeFilter === 'rugged' ? s.selected : ''}`}>Rugged</button>
                        {typeFilter ? <button onClick={() => setSearchParams({})} className={s.clearFilterBtn}>Clear filters</button> : null}
                    </div>
                    <div className={s.vanList}>
                        {vanElement}
                    </div>


        </div>
    );
};

export default Vans;