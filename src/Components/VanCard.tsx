import React from 'react';
import s from './VanCard.module.css'
import {VanCardPropsType} from "../Types";

const VanCard = (props: VanCardPropsType) => {
    return (
        <div key={props.id} className={s.vanTile}>
            <img src={props.imageUrl}/>
            <div className={s.vanInfo}>
                <h3>{props.name}</h3>
                <p>${props.price}<span>/day</span></p>
            </div>
            <i className={`${s.vanType} ${props.type} selected`}>{props.type}</i>
        </div>
    );
};

export default VanCard;