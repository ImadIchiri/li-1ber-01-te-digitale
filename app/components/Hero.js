"use client";

import styles from "./Hero.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero({ dict }) {
    const t = dict || {}; // safe fallback
    const titleRef = useScrollAnimation("fade-in");
    const subRef = useScrollAnimation("slide-up");
    const ctaRef = useScrollAnimation("fade-in");

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.domainName}>{t.domain || "LiberteDigitale.com"}</span>
                <h1 ref={titleRef} className={`${styles.title} delay-100`}>
                    {t.title}
                </h1>
                <p ref={subRef} className={`${styles.subtitle} delay-200`}>
                    {t.subtitle}
                </p>
                <div ref={ctaRef} className={`${styles.ctaGroup} delay-300`}>
                    <a href="#contact" className="btn-primary">
                        {t.cta_primary}
                    </a>
                    <a href="#asset" className="btn-secondary">
                        {t.cta_secondary}
                    </a>
                </div>
            </div>
        </section>
    );
}
