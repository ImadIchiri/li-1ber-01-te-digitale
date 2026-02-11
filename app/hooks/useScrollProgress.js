
import { useState, useEffect } from 'react';

export default function useScrollProgress(ref) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Calculate how much of the element has been scrolled past
            // We want the line to start filling when the top of the element hits the middle of the screen (or close to it)
            // and finish when the bottom of the element is visible

            const start = windowHeight * 0.8; // Start when element top is 80% down viewport
            const end = windowHeight * 0.2; // End when element bottom is 20% down viewport

            // Distance from top of viewport to top of element
            const elementTop = rect.top;

            // Calculate progress
            // When elementTop == start, progress is 0
            // When elementTop + elementHeight == end, progress is 1 (approx logic, adjusting for better feel)

            // Let's try a simpler logic: percentage of element height scrolled
            // progress = (scrolled_amount / total_height)

            const scrollY = window.scrollY;
            const elementOffsetTop = ref.current.offsetTop;

            // We need absolute position relative to document, but rect.top is relative to viewport
            // Let's use rect.top

            // We want 0% when element key point (e.g. top) enters view
            // We want 100% when element bottom enters view

            const viewHeight = window.innerHeight;
            const totalDist = elementHeight + viewHeight * 0.5; // Distance to scroll to cover the element plus some

            // Determine how far the element is from the center of the viewport
            const centerLine = viewHeight / 2;
            const elementCenter = rect.top + elementHeight / 2;

            // Simplified approach for the vertical line specifically:
            // We want the line to fill as we scroll down the component
            // 0% when component top is at center of screen
            // 100% when component bottom is at center of screen

            const componentTopRelativeToViewport = rect.top;
            const startFillAt = viewHeight * 0.6; // Start filling when top is at 60% of screen height

            let pixelScrolled = startFillAt - componentTopRelativeToViewport;
            let percent = pixelScrolled / elementHeight;

            if (percent < 0) percent = 0;
            if (percent > 1) percent = 1;

            setProgress(percent);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);

    return progress;
}
