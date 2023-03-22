import React from 'react';
import {useCurrentVan} from "./HostVanDetail";
import s from './HostVanPhotos.module.css'
const HostVanPhotos = () => {
    const { currentVan } = useCurrentVan();

    return (
        <div>
            <img className={s.image} src={currentVan?.imageUrl}/>
        </div>
    );
};

export default HostVanPhotos;