import React from 'react';
import s from './Home.module.css'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <main className={s.main}>
            <div className={s.mainWrapper}>
                <h2>You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to='/vans' className={`button ${s.homeBtn}`}>Find your van</Link>
            </div>
        </main>
    )
};

export default Home;