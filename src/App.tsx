import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route  path='/about' element={<About />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
