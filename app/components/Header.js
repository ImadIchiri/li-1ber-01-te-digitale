"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header({ dict, lang }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Fallback if dict is missing (e.g. during dev transitions)
    const t = dict || { nav: {}, contact: "Inquire Now" };
    const navLinks = [
        { label: t.legacy || "The Legacy", href: "#legacy" },
        { label: t.asset || "The Asset", href: "#asset" },
        { label: t.package || "The Package", href: "#package" },
        { label: t.profiles || "Profiles", href: "#profiles" },
    ];

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

    // Language Switcher Logic
    const toggleLang = lang === "en" ? "fr" : "en";
    const toggleLabel = lang === "en" ? "FR" : "EN";

    const handleLangSwitch = (e) => {
        e.preventDefault();
        const hash = window.location.hash || "";
        window.location.href = `/${toggleLang}${hash}`;
    };

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
                            <a href={`/${toggleLang}`} onClick={handleLangSwitch} className={styles.navLink} style={{ fontWeight: 'bold' }}>
                                {toggleLabel}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={`${styles.navLink} ${styles.navCta}`}>
                                {t.contact}
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}<div className={styles.mobileRight} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <a href={`/${toggleLang}`} onClick={handleLangSwitch} className={styles.mobileLangLink} style={{ color: 'var(--white)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        {toggleLabel}
                    </a>
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
                    {t.contact}
                </a>
            </div>
        </header>
    );
}
