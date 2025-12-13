import React from 'react'
import styles from './FeaturesSection.module.css'
import y1 from '../../../../assets/images/y1.png';
import y2 from '../../../../assets/images/y2.jpg';
import y3 from '../../../../assets/images/y3.jpg';
import y4 from '../../../../assets/images/y4.jpg';
import y5 from '../../../../assets/images/y5.jpg';
import y6 from '../../../../assets/images/y6.jpg';

const FeaturesSection = () => {
    const features = [
        { title: "Idea Management", desc: "Capture & organize ideas before they disappear", img: y1 },
        { title: "Kanban Boards", desc: "Visual task tracking that actually makes sense", img: y2 },
        { title: "Timeboxing", desc: "ADHD-friendly planning with built-in timers", img: y3 },
        { title: "Whiteboards", desc: "Brain dump, mind map, plan — all in one place", img: y4 },
        { title: "Gantt Charts", desc: "See the big picture without the overwhelm", img: y5 },
        { title: "Retrospectives", desc: "Learn from every project, together", img: y6 }
    ];

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <h2>Everything you need to get work done</h2>
                <p className={styles.subtitle}>Simple, visual, and built for how your brain actually works</p>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <img
                                src={f.img}
                                alt={f.title}
                                className={styles.featureImage}
                            />
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