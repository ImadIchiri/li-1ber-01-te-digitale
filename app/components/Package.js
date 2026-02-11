"use client";

import { useRef } from "react";
import styles from "./Package.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Package({ dict }) {
    const t = dict || {};
    const containerRef = useScrollAnimation("fade-in");
    const listRef = useRef(null);
    const progress = useScrollProgress(listRef);

    return (
        <section id="package" className={styles.package}>
            <div className={`container ${styles.inner}`}>
                <div ref={containerRef}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>

                <div ref={listRef} className={styles.timeline}>
                    {/* Central Line */}
                    <div className={styles.lineBase}>
                        <div
                            className={styles.lineProgress}
                            style={{ transform: `scaleY(${progress})` }}
                        />
                    </div>

                    <div className={styles.itemsContainer}>
                        {t.items && t.items.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }) {
    const isEven = index % 2 === 0;
    const ref = useScrollAnimation(isEven ? "slide-right" : "slide-left"); // Animate from sides

    return (
        <div ref={ref} className={`${styles.item} ${isEven ? styles.left : styles.right}`}>
            <div className={styles.content}>
                <span className={styles.number}>{index + 1}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
            </div>
            <div className={styles.dot} />
        </div>
    );
}
