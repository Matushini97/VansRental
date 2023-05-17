import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans, {loader as vansLoader} from "./Pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from './Pages/Vans/VanDetail'
import './../server'
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./Components/HostLayout";
import VanCard from "./Components/VanCard";
import HostVans, {loader as hostVansLoader} from "./Pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import Error from './Pages/Error/Error'
import Login from "./Pages/Login/Login";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

        <Route path='*' element={<Error />}/>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route
            path='login'
            element={<Login/>}/>
        <Route
            path='vans'
            element={<Vans/>}
            loader={vansLoader}
            errorElement={<Error/>}/>
        <Route
            path='vans/:id'
            element={<VanDetail/>}
            loader={vanDetailLoader}
        />

        <Route path='host' element={<HostLayout />}>\
            <Route index element={<Dashboard />}  loader={async () => {
                return null
            }}/>
            <Route path="income" element={<Income />}  loader={async () => {
                return null
            }}/>
            <Route path="vans" element={<HostVans/>}  loader={hostVansLoader}/>
            <Route path="vans/:id" element={<HostVanDetail/>}  loader={hostVanDetailLoader}>
                <Route index element={<HostVanInfo/>} loader={async () => {
                    return null
                }}/>
                <Route path="photos" element={<HostVanPhotos/>} loader={async () => {
                    return null
                }}/>
                <Route path="pricing" element={<HostVanPricing/>} loader={async () => {
                    return null
                }}/>
            </Route>
            <Route path="reviews" element={<Reviews />} />
        </Route>

    </Route>
))


const App = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<Layout/>}>
        //             <Route path='*' element={<Error />}/>
        //             <Route index element={<Home/>}/>
        //             <Route path='about' element={<About/>}/>
        //             <Route path='vans' element={<Vans/>}/>
        //             <Route path='vans/:id' element={<VanDetail/>}/>
        //             <Route path='host' element={<HostLayout />}>\
        //                 <Route index element={<Dashboard />} />
        //                 <Route path="income" element={<Income />} />
        //                 <Route path="vans" element={<HostVans/>} />
        //                 <Route path="vans/:id" element={<HostVanDetail />}>
        //                     <Route index element={<HostVanInfo/>}/>
        //                     <Route path="photos" element={<HostVanPhotos/>}/>
        //                     <Route path="pricing" element={<HostVanPricing/>}/>
        //                 </Route>
        //                 <Route path="reviews" element={<Reviews />} />
        //             </Route>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>

        <RouterProvider router={router}/>
    )
}

export default App
