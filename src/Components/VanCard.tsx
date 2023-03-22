import React from 'react';
import s from './VanCard.module.css'
import {VanCardPropsType} from "../Types";
import {Link} from "react-router-dom";

const VanCard = (props: VanCardPropsType) => {

    const upperCaseType = props.type.charAt(0).toUpperCase() + props.type.slice(1)

    const btnColor = props.type ==='simple' ? s.simple : props.type === 'luxury'? s.luxury: s.rugged

    return (

            <Link to={props.id} state={ { search: `${props.search}`, type : props.typeFilter} } className={s.vanList}>
                <div className={s.vanTile}>
                    <img src={props.imageUrl}/>
                    <div className={s.vanInfo}>
                        <h3>{props.name}</h3>
                        <p>${props.price}<br/><span>/day</span></p>
                    </div>
                    <i className={`${s.vanType} ${btnColor} ${s.selected}`}>{upperCaseType}</i>
                </div>
            </Link>




    );
};

export default VanCard;