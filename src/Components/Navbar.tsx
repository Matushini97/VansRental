import React from 'react';
import {Link} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav>
            <Link to='/' className={s.title}>#VANLIFE</Link>
            <div className={s.navLinks}>
                <Link to='/about'>About</Link>
                <Link to='/vans'>Vans</Link>
            </div>
        </nav>
    )

};

export default Navbar;