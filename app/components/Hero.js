"use client";

import styles from "./Hero.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
    const titleRef = useScrollAnimation("fade-in");
    const subRef = useScrollAnimation("slide-up");
    const ctaRef = useScrollAnimation("fade-in");

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.domainName}>LiberteDigitale.com</span>
                <h1 ref={titleRef} className={`${styles.title} delay-100`}>
                    Own the Future of Digital Freedom
                </h1>
                <p ref={subRef} className={`${styles.subtitle} delay-200`}>
                    A premium domain crafted for the next era of online education,
                    coaching, and digital empowerment — ready for your vision.
                </p>
                <div ref={ctaRef} className={`${styles.ctaGroup} delay-300`}>
                    <a href="#contact" className="btn-primary">
                        Inquire Now →
                    </a>
                    <a href="#asset" className="btn-secondary">
                        Discover the Asset
                    </a>
                </div>
            </div>
        </section>
    );
}
