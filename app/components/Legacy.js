"use client";

import styles from "./Legacy.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Legacy({ dict }) {
    const t = dict || {};
    const containerRef = useScrollAnimation("slide-up");

    return (
        <section id="legacy" className={styles.legacy}>
            <div ref={containerRef} className={`container ${styles.inner}`}>
                <span className="overline">{t.overline}</span>
                <h2 className={styles.title}>{t.title}</h2>
                <hr className={styles.rule} />
                <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t.p1 ? t.p1.replace("<highlight>", `<span class="${styles.highlight}">`).replace("</highlight>", "</span>") : "" }}
                />
                <p className={styles.text}>{t.p2}</p>
                <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t.p3 ? t.p3.replace("<highlight>", `<span class="${styles.highlight}">`).replace("</highlight>", "</span>") : "" }}
                />
            </div>
        </section>
    );
}
