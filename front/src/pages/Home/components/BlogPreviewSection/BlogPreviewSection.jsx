import React from 'react'
import styles from './BlogPreviewSection.module.css'
import t1 from '../../assets/images/t1.png'
import t2 from '../../assets/images/t2.png'

export default function BlogPreviewSection() {
    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.post}>
                    <img src={t1} alt="Blog Post 1" className={styles.img} />
                    <h3>Ultimate Guide to Rebuilding Trust in Project Management</h3>
                    <p>When Sarah's Team Stopped Trusting the Algorithm...</p>
                </div>
                <div className={styles.post}>
                    <img src={t2} alt="Blog Post 2" className={styles.img} />
                    <h3>Teamwork Amplified: The Power of Collaboration Software</h3>
                    <p>Collaboration is the fuel that powers successful project management...</p>
                </div>
            </div>
        </section>
    )
}