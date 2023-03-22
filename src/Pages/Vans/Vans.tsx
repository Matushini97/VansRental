import React, {useEffect, useState} from 'react';
import s from './Vans.module.css'
import {VansType} from "../../Types";
import VanCard from "../../Components/VanCard";
import {Link, useSearchParams} from "react-router-dom";
import Loader from "../../Components/Loader";



const Vans = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState<VansType[] | null>(null)

    const typeFilter = searchParams.get("type")


    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
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
            />

        )
    })

    return (
        <div className={s.vansWrapper}>
            {/*{vans ? (*/}
            {/*    <>*/}
                    <h2>Explore our van options</h2>
                    <div className={s.filters}>
                        <Link to='?type=simple' className={`${s.filterBtn} ${s.simple}`}>Simple</Link>
                        <Link to='?type=luxury' className={`${s.filterBtn} ${s.luxury}`}>Luxury</Link>
                        <Link to='?type=rugged' className={`${s.filterBtn} ${s.rugged}`}>Rugged</Link>
                        <Link to='.' className={s.clearFilterBtn}>Clear filters</Link>
                    </div>
                    <div className={s.vanList}>
                        {vanElement}
                    </div>
                {/*</>*/}
            {/*) :*/}
            {/*<Loader/>}*/}

        </div>
    );
};

export default Vans;