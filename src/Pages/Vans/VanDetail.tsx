import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import s from './VanDetail.module.css'
import {VansType} from "../../Types";
import Loader from "../../Components/Loader";

const VanDetail = () => {

    const params = useParams()
    // const btnColor = van?.type ==='simple' ? s.simple : van?.type === 'luxury'? s.luxury: s.rugged
    const [van, setVan] = useState<VansType | null>(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className={s.vanDetailContainer}>
            {van ? (
                <div className={s.vanDetail}>
                    <img src={van.imageUrl}/>
                    <div className={s.infoWrapper}>
                        <i className={`${s.vanType} ${van.type ==='simple' ? s.simple : van.type === 'luxury'? s.luxury: s.rugged} ${s.selected}`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className={s.vanPrice}><span>${van.price}</span>/day</p>
                        <p className={s.vanDescription}>{van.description}</p>
                        <button className={s.linkBtn}>Rent this van</button>
                    </div>

                </div>
            ) : <Loader/>}
        </div>
    );
};

export default VanDetail;