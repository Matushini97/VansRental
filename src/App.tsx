import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from './Pages/Vans/VanDetail'
import './../server'
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/vans' element={<Vans />}/>
                    <Route path='/vans/:id' element={<VanDetail />}/>
                    <Route path='/host' element={<Dashboard />}/>
                    <Route path='/host/income' element={<Income />}/>
                    <Route path='/host/reviews' element={<Reviews />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
