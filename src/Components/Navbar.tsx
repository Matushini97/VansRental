import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import loginImg from '../../public/avatar-icon.png'

const Navbar = () => {
    const [isLoggedIn,setIsLoggedIn] = useState<string>('')
    const ActiveStyle = {
        color: "#161616",
        textDecoration: "underline 3px"
    }

    useEffect(() => {
        const saved = localStorage.getItem('loggedin')
        // setIsLoggedIn(JSON.parse(saved))
    }, [])

    return (
        <nav className={s.navbarMain}>
            <NavLink to='/' className={s.title}>#VANLIFE</NavLink>
            <div className={s.navLinks}>
                <NavLink style={ ({isActive}) => isActive ? ActiveStyle : undefined} to='/host'>Host</NavLink>
                <NavLink style={ ({isActive}) => isActive ? ActiveStyle : undefined} to='/about'>About</NavLink>
                <NavLink style={ ({isActive}) => isActive ? ActiveStyle : undefined} to='/vans'>Vans</NavLink>
                <NavLink to="login" className={s.loginLink}>
                    <img
                        src={loginImg}
                        alt="Login"
                        className="login-icon"
                    />
                </NavLink>
            </div>

        </nav>
    )

};

export default Navbar;