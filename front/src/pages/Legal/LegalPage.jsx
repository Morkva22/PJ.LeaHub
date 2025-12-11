import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TermsOfService from './Terms & Conditions/Terms&Coditions';
import PrivacyPolicy from './Privacy Policy/PrivacyPolicy';
import CookiePolicy from './Cookie Policy/CookiePolicy';
import AcceptableUsePolicy from './Acceptable Use Policy/AcceptableUsePolicy';
import Disclaimer from './Disclaimer/Disclaimer';
import ResponsibleDisclosurePolicy from './Responsible Disclosure Policy/ResponsibleDisclosurePolicy';
import TrademarkPolicy from './Trademark Policy/TrademarkPolicy';
import styles from './Legal.module.css';

const LegalPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={styles.legalContainer}>
            <div className={styles.contentArea}>
                <Routes>
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="cookies" element={<CookiePolicy />} />
                    <Route path="acceptable-use" element={<AcceptableUsePolicy />} />
                    <Route path="disclaimer" element={<Disclaimer />} />
                    <Route path="responsible-disclosure" element={<ResponsibleDisclosurePolicy />} />
                    <Route path="trademark" element={<TrademarkPolicy />} />
                    <Route path="*" element={<TermsOfService />} />
                </Routes>
            </div>
        </div>
    );
};

export default LegalPage;