"use client";

import styles from "./Profiles.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const profiles = [
    {
        icon: "🎓",
        title: "E-Learning Platforms",
        text: 'The name "Liberté Digitale" speaks directly to digital freedom through education — perfect positioning for course platforms, LMS providers, and EdTech startups.',
    },
    {
        icon: "🎯",
        title: "Online Coaches & Consultants",
        text: "A premium, aspirational brand name that instantly communicates transformation and empowerment — exactly what coaching clients seek.",
    },
    {
        icon: "🚀",
        title: "Digital Agencies",
        text: "For agencies focused on digital transformation, this domain conveys innovation, independence, and a forward-thinking philosophy.",
    },
    {
        icon: "💡",
        title: "Startup Brands",
        text: "A unique, cross-lingual name that stands out in crowded markets. Perfect for any startup building at the intersection of technology and personal growth.",
    },
];

export default function Profiles() {
    const headerRef = useScrollAnimation("fade-in");

    return (
        <section id="profiles" className={styles.profiles}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">Target Profiles</span>
                    <h2 className={styles.title}>Who Is This Domain For?</h2>
                    <p className={styles.subtitle}>
                        Built for visionaries who understand that the right name changes everything.
                    </p>
                </div>
                <div className={styles.grid}>
                    {profiles.map((p, index) => (
                        <ProfileCard key={p.title} profile={p} index={index} />
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
            <span className={styles.icon}>{profile.icon}</span>
            <h3 className={styles.cardTitle}>{profile.title}</h3>
            <p className={styles.cardText}>{profile.text}</p>
        </div>
    );
}
