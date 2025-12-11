import React from 'react';
import styles from './CookiePolicy.module.css';

const CookiePolicy = () => {
    return (
        <div className={styles.legalContainer}>
            <div className={styles.contentArea}>
                <div className={styles.legalDocument}>
                    <h1>Cookie Policy for Leantime's Website</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2>1. Introduction:</h2>
                        <p>
                            Leantime uses cookies and similar tracking technologies to enhance your experience while using our website and services. This Cookie Policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use or visit our website.
                        </p>
                    </section>

                    <section>
                        <h2>2. What are Cookies?</h2>
                        <p>
                            Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the site owners.
                        </p>
                    </section>

                    <section>
                        <h2>3. Types of Cookies Used:</h2>
                        <p>
                            We use the following types of cookies:
                        </p>
                        <ul className={styles.cookieList}>
                            <li>
                                <strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off in our systems.
                            </li>
                            <li>
                                <strong>Performance Cookies:</strong> These allow us to count visits and traffic sources, so we can measure and improve the performance of our site.
                            </li>
                            <li>
                                <strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.
                            </li>
                            <li>
                                <strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Third-Party Cookies:</h2>
                        <p>
                            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
                        </p>
                    </section>

                    <section>
                        <h2>5. Consent and Control:</h2>
                        <p>
                            Upon your first visit to our website, you will be prompted to accept or refuse cookies. You can change your cookie preferences at any time by adjusting your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2>6. Data Privacy:</h2>
                        <p>
                            For detailed information on how we process personal data, please refer to our <a href="/privacy-policy" className={styles.internalLink}>Privacy Policy</a>.
                        </p>
                    </section>

                    <section>
                        <h2>7. Changes to the Cookie Policy:</h2>
                        <p>
                            We may update this Cookie Policy from time to time, and we encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Us:</h2>
                        <p>
                            If you have any questions about this Cookie Policy, please contact us at <a href="mailto:support@leantime.io" className={styles.emailLink}>support@leantime.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;