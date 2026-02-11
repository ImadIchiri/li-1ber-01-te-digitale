"use client";

import { useEffect, useRef } from "react";

export default function useScrollAnimation(animationClass = "fade-in", threshold = 0.2) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [animationClass, threshold]);

    return ref;
}
