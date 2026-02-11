"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
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
                    _template: "table", // optional: prettier email format
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
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
                    <span className="overline">The Close</span>
                    <h2 className={styles.title}>Ready to Own This Domain?</h2>
                    <p className={styles.subtitle}>
                        Whether you&apos;re exploring or ready to commit — let&apos;s start the conversation.
                    </p>
                </div>
                <div className={styles.grid}>
                    {/* Contact Form */}
                    <form ref={formRef} className={`${styles.form} delay-100`} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === "submitting" || status === "success"}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                placeholder="john@company.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === "submitting" || status === "success"}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder="I'm interested in acquiring LiberteDigitale.com..."
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
                            {status === "submitting" ? "Sending..." :
                                status === "success" ? "Message Sent Successfully ✓" :
                                    "Send Inquiry →"}
                        </button>

                        {status === "error" && (
                            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "10px", textAlign: "center" }}>
                                Something went wrong. Please try again or email directly.
                            </p>
                        )}

                        {status === "success" && (
                            <p style={{ color: "var(--gold)", fontSize: "0.9rem", marginTop: "10px", textAlign: "center" }}>
                                Thank you! We&apos;ll be in touch shortly.
                            </p>
                        )}
                    </form>

                    {/* Direct Buy */}
                    <div ref={directBuyRef} className={`${styles.directBuy} delay-200`}>
                        <h3 className={styles.directBuyTitle}>Prefer a Direct Transaction?</h3>
                        <p className={styles.directBuyText}>
                            Skip the back-and-forth. Use a trusted escrow service for a
                            seamless, secure acquisition.
                        </p>
                        <a
                            href="http://libertedigitale.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directBuyLink}
                        >
                            Buy on Dynadot.com →
                        </a>
                        <span className={styles.or}>or</span>
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
