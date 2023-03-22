import React from 'react';
import {useCurrentVan} from "./HostVanDetail";
import s from './HostVanPricing.module.css'
const HostVanPricing = () => {

    const { currentVan } = useCurrentVan();

    return (
        <div className={s.priceWrapper}>
            <p>${currentVan?.price}<span>/day</span></p>
        </div>
    );
};

export default HostVanPricing;