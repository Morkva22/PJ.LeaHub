import React from 'react';
import styles from './AcceptableUsePolicy.module.css';

const AcceptableUsePolicy = () => {
    return (
        <div className={styles.legalContainer}>
            <div className={styles.contentArea}>
                <div className={styles.legalDocument}>
                    <h1>Acceptable Use Policy for Leantime's Online Project Management System</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2>1. Introduction:</h2>
                        <p>
                            This Acceptable Use Policy ("Policy") governs the use of Leantime's online project management system ("Service") and aims to ensure a secure, reliable, and respectful environment for all users.
                        </p>
                    </section>

                    <section>
                        <h2>2. Compliance:</h2>
                        <p>
                            By accessing and using the Service, you agree to abide by this Policy and any applicable laws and regulations. Failure to comply with this Policy may result in suspension or termination of your access to the Service.
                        </p>
                    </section>

                    <section>
                        <h2>3. Prohibited Activities:</h2>
                        <p>
                            You must not engage in activities that:
                        </p>
                        <ol className={styles.prohibitedList}>
                            <li>Are illegal, fraudulent, or malicious.</li>
                            <li>Involve the transmission of viruses, malware, or any other harmful code.</li>
                            <li>Attempt to disrupt the integrity or performance of the Service or the data it contains.</li>
                            <li>Violate the intellectual property rights of others.</li>
                            <li>Involve sending unsolicited communications, such as spam or phishing emails.</li>
                            <li>Promote discrimination, hate speech, violence, or harm to individuals or groups.</li>
                            <li>Invade privacy, or exploit or harm minors in any way.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>4. Content Standards:</h2>
                        <p>
                            Any content you upload, store, or share through the Service must:
                        </p>
                        <ol className={styles.contentStandardsList}>
                            <li>Be accurate (where it states facts).</li>
                            <li>Comply with applicable laws and regulations.</li>
                            <li>Not contain material that is defamatory, obscene, offensive, hateful, inflammatory, or otherwise objectionable.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>5. User Responsibilities:</h2>
                        <ol className={styles.responsibilitiesList}>
                            <li>Secure your account credentials and not share them with others.</li>
                            <li>Use the Service in a manner consistent with ethical and respectful conduct.</li>
                            <li>Immediately report any security breaches or misuse of the Service.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>6. Enforcement:</h2>
                        <p>
                            Leantime reserves the right to investigate and take appropriate legal action against anyone who, in Leantime's sole discretion, violates this Policy, including without limitation, removing the offending content from the Service, suspending or terminating the account of such violators, and reporting them to law enforcement authorities.
                        </p>
                    </section>

                    <section>
                        <h2>7. Modification of the Policy:</h2>
                        <p>
                            Leantime reserves the right to modify this Policy at any time. We will endeavor to notify users of significant changes, but it is your responsibility to review this Policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Information:</h2>
                        <p>
                            For any questions about this Acceptable Use Policy, please contact us at <a href="mailto:support@leantime.io" className={styles.emailLink}>support@leantime.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AcceptableUsePolicy;