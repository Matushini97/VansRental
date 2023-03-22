import React from 'react';
import {useCurrentVan} from "./HostVanDetail";
import s from './HostVanInfo.module.css'
import Loader from "../../Components/Loader";

const HostVanInfo = () => {
    const {currentVan} = useCurrentVan();

    if (!currentVan) {
        return <Loader/>
    }

    let vanType
    if (currentVan) {
        vanType = currentVan.type.charAt(0).toUpperCase() + currentVan.type.slice(1)
    }

    return (
        <div className={s.infoWrapper}>
            <p className={s.info}><span>Name:</span> {currentVan.name}</p>
            <p className={s.info}><span>Category:</span> {vanType}</p>
            <p className={s.info}><span>Description:</span> {currentVan.description}</p>
            <p className={s.info}><span>Visibility:</span> Public</p>
        </div>
    );
};

export default HostVanInfo;