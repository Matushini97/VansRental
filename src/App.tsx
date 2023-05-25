import './App.css'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import Layout from "./Components/Layout";
import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans, {loader as vansLoader} from "./Pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from './Pages/Vans/VanDetail'

import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./Components/HostLayout";
import HostVans, {loader as hostVansLoader} from "./Pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import Error from './Pages/Error/Error'
import Login, {loader as LoginLoader, action as loginAction} from "./Pages/Login/Login";
import {requireAuth} from "../utils";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='*' element={<Error />}/>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>} loader={LoginLoader} action={loginAction}/>
        <Route path='vans' element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
        <Route path='vans/:id' element={<VanDetail/>} loader={vanDetailLoader} errorElement={<Error/>}/>
        <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} loader={async ({ request }) => await requireAuth(request)}/>
            <Route path="income" element={<Income />}  loader={async ({ request }) => await requireAuth(request)}/>
            <Route path="vans" element={<HostVans/>}  loader={hostVansLoader} errorElement={<Error/>}/>
            <Route path="vans/:id" element={<HostVanDetail/>}  loader={hostVanDetailLoader} errorElement={<Error/>}>
                <Route index element={<HostVanInfo/>} loader={async ({ request }) => await requireAuth(request)}/>
                <Route path="photos" element={<HostVanPhotos/>} loader={async ({ request }) => await requireAuth(request)}/>
                <Route path="pricing" element={<HostVanPricing/>} loader={async ({ request }) => await requireAuth(request)}/>
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
