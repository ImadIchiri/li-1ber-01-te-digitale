
export const IconSEO = ({ className }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bar Chart */}
    <path d="M18 20V10" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Magnifier Handle */}
    <path d="M15.5 15.5L20 20" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Magnifier Glass Circle (Partial to overlay chart) */}
    <circle cx="11" cy="11" r="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconBrand = ({ className }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield/Badge Shape */}
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Star inside */}
    <path d="M12 7L13.545 10.13L17 10.635L14.5 13.07L15.09 16.51L12 14.885L8.91 16.51L9.5 13.07L7 10.635L10.455 10.13L12 7Z" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMarket = ({ className }) => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Target Circles */}
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="#C5A059"/>
    {/* Arrow hitting center */}
    <path d="M20 4L13.5 10.5" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 4L20 8M20 4L16 4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
