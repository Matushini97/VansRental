import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VanDetail from './Pages/VanDetail'
import './../server'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route  path='/about' element={<About />}/>
                <Route path='/vans' element={<Vans />}/>
                <Route path='/vans/:id' element={<VanDetail />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
