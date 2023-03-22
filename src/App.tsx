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
import HostLayout from "./Components/HostLayout";
import VanCard from "./Components/VanCard";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanPricing";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='vans' element={<Vans/>}/>
                    <Route path='vans/:id' element={<VanDetail/>}/>
                    <Route path='host' element={<HostLayout />}>\
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans/>} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element={<HostVanInfo/>}/>
                            <Route path="photos" element={<HostVanPhotos/>}/>
                            <Route path="pricing" element={<HostVanPricing/>}/>
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
