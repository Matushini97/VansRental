import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import s from './Layout.module.css'

const Layout = () => {
    return (
        <main className={s.mainWrapper}>
            <Navbar />
            <Outlet />
            <Footer/>
        </main>

    );
};

export default Layout;