"use client";

import styles from "./Metrics.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const metricsData = [
    {
        value: "1k - 10k",
        label: "Monthly Search Volume",
        description: "Targeting high-value clusters around 'Liberté' + 'Digitale' and related freedom-tech keywords.",
    },
    {
        value: "$1.17 - $1.76",
        label: "Commercial Intent (CPC)",
        description: "Strong advertiser competition indicates high commercial value in this niche.",
    },
    {
        value: "High Intent",
        label: "Market Value",
        description: "Qualified traffic from the French-speaking digital economy and global nomads.",
    },
];

export default function Metrics() {
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section className={styles.metrics}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">The Numbers</span>
                    <h2 className={styles.title}>SEO & Acquisition Metrics</h2>
                    <p className={styles.subtitle}>
                        Data-driven proof of potential. This domain is already positioned to capture valuable traffic.
                    </p>
                </div>
                <div className={styles.grid}>
                    {metricsData.map((item, index) => (
                        <MetricCard key={index} item={item} index={index} />
                    ))}
                </div>
                <p className={styles.source}>
                    Data source: Ubersuggest / Google Ads Keyword Planner.
                </p>
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
