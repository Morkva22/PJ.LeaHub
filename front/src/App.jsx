    import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/context/AuthContext';
import { ToastProvider } from './lib/context/ToastContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import AIChat from './components/shared/ai-chat/AiChat';
import Home from './pages/Home/HomePage';
import Pricing from './pages/Pricing/PricingPage';
import Features from './pages/Features/FeaturesPage';
import LegalPage from './pages/Legal/LegalPage';
import Register from './pages/auth/Register/Register.jsx';
import Login from './pages/auth/Login/Login';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword.jsx';
import NotFound from './404/404.jsx';
import NotFoundResources from './404/404resources.jsx';
import Schedule from './pages/Schedule/Schedule';
import TechCorner from './pages/tech-Corner/TechCorner';
import Blog from './pages/Blog/Blog';

function App() {
    return (
        <AuthProvider>
            <ToastProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="*" element={
                        <>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/features" element={<Features />} />
                                <Route path="/legal/*" element={<LegalPage />} />
                                <Route path="/tech-corner" element={<TechCorner />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/schedule" element={<Schedule/>} />
                                <Route path="/404-resources" element={<NotFoundResources />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <Footer />
                            <AIChat />
                        </>
                    } />
                </Routes>
            </ToastProvider>
        </AuthProvider>
    );
}

export default App;