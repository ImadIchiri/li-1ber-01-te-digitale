"use client";

import styles from "./Package.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const items = [
    {
        title: "Premium Domain",
        text: "LiberteDigitale.com — clean history, zero penalties, ready for instant deployment.",
    },
    {
        title: "Premium Branding",
        text: "LibertéDigitale.com is a high-recall, phonetically balanced name that commands authority in the French-speaking and international e-(learning/commerce) markets.",
    },
    {
        title: "Market Positioning",
        text: "Perfectly positioned for the $300B+ E-learning and EdTech sectors. The keywords 'Liberté' and 'Digitale' tap into the most searched aspirations in the modern economy.",
    },
    {
        title: "Instant Authority",
        text: "Skip the 'new brand' friction. This domain provides the instant trust required to convert high-ticket clients and serious entrepreneurs from day one.",
    },
];

export default function Package() {
    const containerRef = useScrollAnimation("fade-in");
    const listRef = useScrollAnimation("slide-up");

    return (
        <section id="package" className={styles.package}>
            <div className={`container ${styles.inner}`}>
                <div ref={containerRef}>
                    <span className="overline">The Package</span>
                    <h2 className={styles.title}>Everything You Need to Launch</h2>
                    <p className={styles.subtitle}>
                        This isn&apos;t just a domain — it&apos;s a complete brand foundation.
                    </p>
                </div>
                <ul ref={listRef} className={`${styles.list} delay-200`}>
                    {items.map((item) => (
                        <li key={item.title} className={styles.item}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemText}>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
