import React from 'react';
import styles from './ResponsibleDisclosurePolicy.module.css';

const ResponsibleDisclosurePolicy = () => {
    return (
        <div className={styles.legalContainer}>
            <div className={styles.contentArea}>
                <div className={styles.legalDocument}>
                    <h1>Responsible Disclosure Policy</h1>
                    <div className={styles.introSection}>
                        <p>
                            At Hyve5 Inc DBA Leantime, we consider the security of our systems a top priority. But no matter how much effort we put into system security, there can still be vulnerabilities present. If you've discovered a vulnerability, please follow the guidelines below to report it to our security team:
                        </p>
                    </div>

                    <section>
                        <h2>Reporting Vulnerabilities</h2>
                        <div className={styles.reportingSection}>
                            <p>
                                Report any findings using the Security Advisory Form on Github:
                            </p>
                            <a
                                href="https://github.com/Leantime/leantime/security/advisories/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                            >
                                https://github.com/Leantime/leantime/security/advisories/new
                            </a>
                        </div>
                    </section>

                    <section>
                        <h2>Guidelines for Testing and Reporting</h2>
                        <p>Please follow these rules when testing/reporting vulnerabilities:</p>
                        <ul className={styles.guidelinesList}>
                            <li>
                                <span className={styles.icon}></span>
                                Do not take advantage of the vulnerability you have discovered, for example by downloading more data than is necessary to demonstrate the vulnerability.
                            </li>
                            <li>
                                <span className={styles.icon}></span>
                                Do not read, modify or delete data that isn't your own.
                            </li>
                            <li>
                                <span className={styles.icon}></span>
                                We ask that you do not disclose the problem to third parties until it has been resolved.
                            </li>
                            <li>
                                <span className={styles.icon}></span>
                                The scope of the program is limited to technical vulnerabilities in the Leantime Application (accounts.leantime.io & *.leantime.io) please do not try to test physical security or attempt phishing attacks against our employees, and so on. The website leantime.io is out of scope.
                            </li>
                            <li>
                                <span className={styles.icon}></span>
                                Out of concern for the availability of our services to all users, please do not attempt to carry out DoS attacks, leverage black hat SEO techniques, spam people, and do other similarly questionable things. We also discourage the use of any vulnerability testing tools that automatically generate significant volumes of traffic.
                            </li>
                            <li>
                                <span className={styles.icon}></span>
                                Please refrain from requesting compensation for reporting vulnerabilities. Any acknowledgments will be available via Github.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Commitments to You</h2>
                        <div className={styles.commitmentsSection}>
                            <p>What we promise:</p>
                            <ul className={styles.commitmentsList}>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    We will respond to your report within 3 business days with our evaluation of the report and an expected resolution date.
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    If you have followed the instructions above, we will not take any legal action against you in regard to the report.
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    We will keep you informed during all stages of resolving the problem.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.acknowledgmentSection}>
                        <div className={styles.acknowledgmentBox}>
                            <span className={styles.heartIcon}> </span>
                            <p>
                                We sincerely appreciate the efforts of security researchers in keeping our community safe.
                            </p>
                        </div>
                    </section>

                    <section className={styles.contactSection}>
                        <h3>Need Help or Have Questions?</h3>
                        <p>
                            If you need assistance or have questions about this policy, please contact our security team at{' '}
                            <a href="mailto:security@leantime.io" className={styles.securityEmail}>
                                security@leantime.io
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ResponsibleDisclosurePolicy;