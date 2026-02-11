"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact({ dict }) {
    const t = dict || {};
    const tf = t.form || {};
    const tdb = t.direct_buy || {};

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const headerRef = useScrollAnimation("fade-in");
    const formRef = useScrollAnimation("slide-up");
    const directBuyRef = useScrollAnimation("slide-up", 0.1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formsubmit.co/ajax/contact@libertedigitale.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Inquiry from ${formData.name}`,
                    _template: "table",
                }),
            });

            const data = await response.json();

            if (response.ok && data.success !== "false") {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                console.error("Form submission error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div ref={headerRef} className={styles.header}>
                    <span className="overline">{t.overline}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {/* Contact Form */}
                    <form ref={formRef} className={`${styles.form} delay-100`} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>
                                {tf.name_label}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                placeholder={tf.name_placeholder}
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === "submitting" || status === "success"}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>
                                {tf.email_label}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                placeholder={tf.email_placeholder}
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === "submitting" || status === "success"}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>
                                {tf.message_label}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder={tf.message_placeholder}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === "submitting" || status === "success"}
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={status === "submitting" || status === "success"}
                        >
                            {status === "submitting" ? tf.submit_sending :
                                status === "success" ? tf.submit_success :
                                    tf.submit_idle}
                        </button>

                        {status === "error" && (
                            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "10px", textAlign: "center" }}>
                                {tf.error}
                            </p>
                        )}

                        {status === "success" && (
                            <p style={{ color: "var(--gold)", fontSize: "0.9rem", marginTop: "10px", textAlign: "center" }}>
                                {tf.success_message}
                            </p>
                        )}
                    </form>

                    {/* Direct Buy */}
                    <div ref={directBuyRef} className={`${styles.directBuy} delay-200`}>
                        <h3 className={styles.directBuyTitle}>{tdb.title}</h3>
                        <p className={styles.directBuyText}>{tdb.text}</p>
                        <a
                            href="http://libertedigitale.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directBuyLink}
                        >
                            {tdb.button}
                        </a>
                        <span className={styles.or}>{tdb.or}</span>
                        <a
                            href="mailto:contact@libertedigitale.com"
                            className={styles.emailLink}
                        >
                            contact@libertedigitale.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
