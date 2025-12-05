import React from 'react'
import styles from './BlogPreviewSection.module.css'

export default function BlogPreviewSection() {
    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.post}>
                    <div className={styles.img}>Blog Post 1</div>
                    <h3>Ultimate Guide to Rebuilding Trust in Project Management</h3>
                    <p>When Sarah’s Team Stopped Trusting the Algorithm...</p>
                </div>
                <div className={styles.post}>
                    <div className={styles.img}>Blog Post 2</div>
                    <h3>Teamwork Amplified: The Power of Collaboration Software</h3>
                    <p>Collaboration is the fuel that powers successful project management...</p>
                </div>
            </div>
        </section>
    )
}