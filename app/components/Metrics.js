"use client";

import styles from "./Metrics.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Metrics({ dict }) {
    const t = dict || {};
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section className={styles.metrics}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {t.cards && t.cards.map((item, index) => (
                        <MetricCard key={index} item={item} index={index} />
                    ))}
                </div>
                <p className={styles.source}>{t.source}</p>
            </div>
        </section>
    );
}

function MetricCard({ item, index }) {
    const ref = useScrollAnimation("slide-up");
    const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";

    return (
        <div ref={ref} className={`${styles.metricCard} ${delayClass}`}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
            <p className={styles.description}>{item.description}</p>
        </div>
    );
}
