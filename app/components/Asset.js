"use client";

import styles from "./Asset.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Asset({ dict }) {
    const t = dict || {};
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section id="asset" className={styles.asset}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {t.cards && t.cards.map((item, index) => (
                        <AssetCard key={index} item={item} index={index} />
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
            {/* 
        Ideally, icons should be passed in JSON or mapped here. 
        For simplicity, we'll map based on index if the JSON doesn't contain the icon string directly.
        But JSON usually doesn't store JSX/Components. 
        Since the order is fixed (SEO, Brandability, Market Fit), we can use a helper array for icons.
      */}
            <span className={styles.icon}>{getIcon(index)}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
        </div>
    );
}

function getIcon(index) {
    const icons = ["🔍", "✦", "📈"];
    return icons[index] || "•";
}
