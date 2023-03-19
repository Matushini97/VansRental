import React, {useEffect, useState} from 'react';
import s from './Vans.module.css'
import {VansType} from "../../Types";
import VanCard from "../../Components/VanCard";
import {Link} from "react-router-dom";
import Loader from "../../Components/Loader";



const Vans = () => {

    const [vans, setVans] = useState<VansType[] | null>(null)

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElement = vans?.map(van => {
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
                        <button className={s.filterBtn}>Simple</button>
                        <button className={s.filterBtn}>Luxury</button>
                        <button className={s.filterBtn}>Rugged</button>
                        <button className={s.clearFilterBtn}>Clear filters</button>
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