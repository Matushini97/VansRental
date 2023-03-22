import React from 'react';
import {useCurrentVan} from "./HostVanDetail";

const HostVanPhotos = () => {
    const { currentVan } = useCurrentVan();

    return (
        <div>
            <img src={currentVan?.imageUrl}/>
        </div>
    );
};

export default HostVanPhotos;