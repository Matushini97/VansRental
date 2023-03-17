import React from 'react';
import s from './About.module.css'
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={s.aboutWrapper}>
            <div className={s.aboutImg}></div>
            <div className={s.textExploreWrapper}>
                <div className={s.aboutTextWrapper}>
                <span className={s.aboutText}>
                    <h2>Don’t squeeze in a sedan when you could relax in a van. </h2>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br/>(Hitch costs extra 😉)
                    </p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </span>
                </div>
                <div className={s.exploreWrapper}>
                    <h2>Your destination is waiting.<br/>Your van is ready.</h2>
                    <Link to='/vans' className={`button ${s.aboutBtn}`}>Explore our vans</Link>
                </div>
            </div>

        </div>
    );
};

export default About;