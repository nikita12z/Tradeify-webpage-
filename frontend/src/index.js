import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFoundPage from './landing_page/NotFoundPage';

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

     <Navbar/>
        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/pricing' element={<PricingPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/support' element={<SupportPage/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>

        </Routes>
     <Footer/>

    </BrowserRouter>
);

