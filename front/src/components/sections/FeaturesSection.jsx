import React from 'react'
import styles from './FeaturesSection.module.css'

const FeaturesSection = () => {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <h2>Everything you need to get work done</h2>
                <p className={styles.subtitle}>Simple, visual, and built for how your brain actually works</p>

                <div className={styles.grid}>
                    {[
                        { title: "Idea Management", desc: "Capture & organize ideas before they disappear" },
                        { title: "Kanban Boards", desc: "Visual task tracking that actually makes sense" },
                        { title: "Timeboxing", desc: "ADHD-friendly planning with built-in timers" },
                        { title: "Whiteboards", desc: "Brain dump, mind map, plan — all in one place" },
                        { title: "Gantt Charts", desc: "See the big picture without the overwhelm" },
                        { title: "Retrospectives", desc: "Learn from every project, together" }
                    ].map((f, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.placeholder}>Feature {i + 1}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection