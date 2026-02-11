"use client";

import styles from "./Profiles.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Profiles({ dict }) {
    const t = dict || {};
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section id="profiles" className={styles.profiles}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {t.cards && t.cards.map((p, index) => (
                        <ProfileCard key={index} profile={p} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProfileCard({ profile, index }) {
    const ref = useScrollAnimation("slide-up");
    const delayClass = index % 2 === 0 ? "delay-100" : "delay-200";

    return (
        <div ref={ref} className={`${styles.card} ${delayClass}`}>
            <span className={styles.icon}>{getIcon(index)}</span>
            <h3 className={styles.cardTitle}>{profile.title}</h3>
            <p className={styles.cardText}>{profile.text}</p>
        </div>
    );
}

function getIcon(index) {
    const icons = ["🎓", "🎯", "🚀", "💡"];
    return icons[index] || "•";
}
