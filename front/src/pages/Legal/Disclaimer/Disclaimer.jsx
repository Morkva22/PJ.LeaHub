import React from 'react';
import styles from './Disclaimer.module.css';

const DisclaimerPolicy = () => {
    return (
        <div className={styles.legalContainer}>
            <div className={styles.contentArea}>
                <div className={styles.legalDocument}>
                    <h1>Disclaimer Policy for Leantime</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2>1. General Information:</h2>
                        <p>
                            The content provided on the Leantime website and through our SaaS-based online project management system ("Service") is for general informational purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
                        </p>
                    </section>

                    <section>
                        <h2>2. Professional Advice Disclaimer:</h2>
                        <p>
                            The Service is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information contained on this Service is solely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2>3. External Links Disclaimer:</h2>
                        <p>
                            The Service may contain (or you may be sent through the Service) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                        </p>
                    </section>

                    <section>
                        <h2>4. Errors and Omissions Disclaimer:</h2>
                        <p>
                            The information given by the Service is subject to change and may contain errors or omissions. We are not responsible for any errors or omissions, or for the results obtained from the use of this information.
                        </p>
                    </section>

                    <section>
                        <h2>5. Fair Use Disclaimer:</h2>
                        <p>
                            Leantime may use copyrighted material which has not always been specifically authorized by the copyright owner. It is being made available in an effort to advance understanding of our services and offerings. This constitutes a 'fair use' of any such copyrighted material as provided for in copyright law.
                        </p>
                    </section>

                    <section>
                        <h2>6. No Endorsement Disclaimer:</h2>
                        <p>
                            References on the Service to any specific commercial products, processes, services, manufacturers, or companies do not constitute its endorsement or recommendation by Leantime. The Service is not responsible for the contents of any "off-site" web page referenced from this server.
                        </p>
                    </section>

                    <section>
                        <h2>7. Personal Responsibility:</h2>
                        <p>
                            You acknowledge you are using our Service voluntarily and that any choices, actions, and results now and in the future are solely your responsibility. Leantime will not be liable to you or any other party for any decision made or action taken in reliance on the information given by the Service or for any consequential, special, or similar damages.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Us:</h2>
                        <p>
                            For any queries or further clarification regarding our Disclaimer Policy, please contact us at <a href="mailto:support@leantime.io" className={styles.emailLink}>support@leantime.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPolicy;