"use client";

import styles from "./Asset.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const assets = [
    {
        icon: "🔍",
        title: "SEO Power",
        text: "A clean, keyword-rich domain that signals authority in the digital education and freedom-tech space. Zero spam history, ready for indexing.",
    },
    {
        icon: "✦",
        title: "Brandability",
        text: '"Liberté Digitale" evokes trust, aspiration, and modernity. It\'s memorable, cross-lingual, and built for a global audience.',
    },
    {
        icon: "📈",
        title: "Market Fit",
        text: "The e-learning market is projected to exceed $400B by 2027. This domain is positioned squarely at the intersection of education and digital empowerment.",
    },
];

export default function Asset() {
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section id="asset" className={styles.asset}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">The Asset</span>
                    <h2 className={styles.title}>Why This Domain?</h2>
                    <p className={styles.subtitle}>
                        A rare combination of meaning, memorability, and market timing.
                    </p>
                </div>
                <div className={styles.grid}>
                    {assets.map((item, index) => (
                        <AssetCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AssetCard({ item, index }) {
    const ref = useScrollAnimation("slide-up");
    // Stagger delay based on index
    const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";

    return (
        <div ref={ref} className={`${styles.card} ${delayClass}`}>
            <span className={styles.icon}>{item.icon}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
        </div>
    );
}
