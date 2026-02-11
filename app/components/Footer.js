import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <span className={styles.logo}>
                    Liberté<span className={styles.logoAccent}>Digitale</span>
                </span>
                <p className={styles.copy}>
                    &copy; {new Date().getFullYear()} Liberté Digitale. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
