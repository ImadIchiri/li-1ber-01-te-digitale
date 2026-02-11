
const Gold = "#C5A059";
const Charcoal = "#1A1A1A";

export const IconLearning = ({ className }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Mortarboard */}
        <path d="M12 3L2 8L12 13L22 8L12 3Z" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10V16C5 16 8 18 12 18C16 18 19 16 19 16V10" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Tassel or Digital Accent */}
        <path d="M12 13V16" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="18" r="2" fill={Gold} />
    </svg>
);

export const IconCoach = ({ className }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* User Profile */}
        <circle cx="12" cy="8" r="4" stroke={Charcoal} strokeWidth="1.5" />
        <path d="M6 21V19C6 16.2386 8.23858 14 11 14H13C15.7614 14 18 16.2386 18 19V21" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Shine/Star Accent */}
        <path d="M19.5 4.5L20.5 6L21.5 4.5L23 3.5L21.5 2.5L20.5 1L19.5 2.5L18 3.5L19.5 4.5Z" fill={Gold} />
    </svg>
);

export const IconAgency = ({ className }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Network Nodes */}
        <circle cx="6" cy="18" r="2" stroke={Charcoal} strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2" stroke={Charcoal} strokeWidth="1.5" />
        <circle cx="12" cy="6" r="2" stroke={Charcoal} strokeWidth="1.5" />
        {/* Connections */}
        <path d="M10.29 7.71L7.71 16.29" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.71 7.71L16.29 16.29" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 18H16" stroke={Gold} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const IconStartup = ({ className }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Rocket */}
        <path d="M12 2C12 2 11 6 11 8C11 10 9 11 9 11L15 11C15 11 13 10 13 8C13 6 12 2 12 2Z" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V22" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11L7 17L12 14L17 17L15 11" stroke={Charcoal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Spark */}
        <path d="M17 5L19 7" stroke={Gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5L17 7" stroke={Gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
