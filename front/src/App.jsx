import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import Home from './pages/Home/HomePage'
import Pricing from './pages/Pricing/PricingPage'
import Features from './pages/Features/FeaturesPage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features" element={<Features />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App