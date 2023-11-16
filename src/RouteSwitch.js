import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Staff from './Pages/Staff';
import Contact from './Pages/Contact';

import './main.css';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/services" element={ <Services/> } />
                <Route path="/staff" element={ <Staff/> } />
                <Route path="/contact" element={ <Contact/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;