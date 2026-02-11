import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer({ dict }) {
    const t = dict || {};
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <span className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Liberté Digitale Logo"
                        width={28}
                        height={28}
                        className={styles.logoImage}
                    />
                    Liberte<span className={styles.logoAccent}>Digitale</span>
                </span>
                <p className={styles.copy}>
                    &copy; {new Date().getFullYear()} Liberte Digitale. {t.rights}
                </p>
            </div>
        </footer>
    );
}
