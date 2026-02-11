"use client";

import styles from "./Package.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Package({ dict }) {
    const t = dict || {};
    const containerRef = useScrollAnimation("fade-in");
    const listRef = useScrollAnimation("slide-up");

    return (
        <section id="package" className={styles.package}>
            <div className={`container ${styles.inner}`}>
                <div ref={containerRef}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <ul ref={listRef} className={`${styles.list} delay-200`}>
                    {t.items && t.items.map((item, index) => (
                        <li key={index} className={styles.item}>
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
