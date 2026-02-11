"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
    { label: "The Legacy", href: "#legacy" },
    { label: "The Asset", href: "#asset" },
    { label: "The Package", href: "#package" },
    { label: "Profiles", href: "#profiles" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.headerInner}>
                <a href="#" className={styles.logo} onClick={handleLinkClick}>
                    <div className={styles.logoImageContainer}>
                        <Image
                            src="/logo.png"
                            alt="Liberté Digitale Logo"
                            width={32}
                            height={32}
                            className={styles.logoImage}
                        />
                    </div>
                    <span>
                        Liberte<span className={styles.logoAccent}>.Digitale</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav>
                    <ul className={styles.nav}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className={`${styles.navLink} ${styles.navCta}`}>
                                Inquire Now
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Overlay */}
            <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={handleLinkClick}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className={styles.mobileCta} onClick={handleLinkClick}>
                    Inquire Now
                </a>
            </div>
        </header>
    );
}
