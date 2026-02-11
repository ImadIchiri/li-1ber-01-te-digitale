"use client";

import styles from "./Legacy.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Legacy() {
    const containerRef = useScrollAnimation("slide-up");

    return (
        <section id="legacy" className={styles.legacy}>
            <div ref={containerRef} className={`container ${styles.inner}`}>
                <span className="overline">The Legacy</span>
                <h2 className={styles.title}>Built with Intention. Ready for Its Next Chapter.</h2>
                <hr className={styles.rule} />
                <p className={styles.text}>
                    Liberté Digitale was born in early 2025 with a clear mission: to build a{" "}
                    <span className={styles.highlight}>digital platform for freedom</span> —
                    freedom to learn, to teach, and to grow without boundaries.
                </p>
                <p className={styles.text}>
                    Over 18 months of dedicated development, we crafted a brand identity,
                    secured premium social handles, and laid the foundation for a platform
                    that resonates with the growing demand for online education and coaching.
                </p>
                <p className={styles.text}>
                    As the founding team pivots toward a new venture, this carefully built
                    digital asset is now available for acquisition — giving you a{" "}
                    <span className={styles.highlight}>head start that money alone can&apos;t buy</span>.
                </p>
            </div>
        </section>
    );
}
