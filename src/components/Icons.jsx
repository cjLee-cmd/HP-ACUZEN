// Modern SVG Icons Component
/* eslint react-refresh/only-export-components: "off" */
export const Icons = {
  // Navigation & UI Icons
  Menu: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Close: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  ChevronDown: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Service Icons - Modern & Clean
  Globe: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  Smartphone: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Palette: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="13.5" cy="6.5" r=".5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="10.5" r=".5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8.5" cy="7.5" r=".5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6.5" cy="12.5" r=".5" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22C13.6 22 15 20.6 15 19S13.6 16 12 16H8.5C7.1 16 6 14.9 6 13.5S7.1 11 8.5 11H12C17.5 11 22 6.5 22 2C22 6.5 17.5 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  Lightbulb: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 21H15M12 3C8.5 3 6 5.5 6 9C6 11 7 12.5 9 14V19H15V14C17 12.5 18 11 18 9C18 5.5 15.5 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // About Section Icons
  Target: ({ size = 48, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  Rocket: ({ size = 48, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 16.5C4.5 17.9 5.6 19 7 19S9.5 17.9 9.5 16.5S8.4 14 7 14S4.5 15.1 4.5 16.5Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M14.5 7.5C14.5 6.1 15.6 5 17 5S19.5 6.1 19.5 7.5S18.4 10 17 10S14.5 8.9 14.5 7.5Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 2L18 6L22 2M6 14L10 18L6 22M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Contact Icons
  Mail: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  Phone: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 16.92V19.92C22 20.52 21.39 21 20.77 21C9.39 21 1 12.61 1 1.23C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.09 0.39 6.09 1.04C6.09 3.53 6.59 5.96 7.57 8.18C7.75 8.61 7.61 9.12 7.18 9.39L4.62 11.01C6.27 14.27 9.73 17.73 12.99 19.38L14.61 16.82C14.88 16.39 15.39 16.25 15.82 16.43C18.04 17.41 20.47 17.91 22.96 17.91C23.61 17.91 24 18.32 24 18.92H22Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  MapPin: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  // Social Icons
  Github: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5 21.5 20 21 20H17C16.5 20 16 19.5 16 19V16M16 12C16 11 16.5 10 17 10H21C21.5 10 22 10.5 22 11V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Linkedin: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  Twitter: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.19439 12.773 4.95371C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39544C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Instagram: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5938 13.799C15.2064 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79359 10.201 8.40624C10.9478 8.01889 11.7978 7.87665 12.63 8C13.4789 8.12476 14.2648 8.52092 14.8717 9.12833C15.4785 9.73574 15.8747 10.5216 15.9995 11.3705L16 11.37Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // PV Feature Icons
  Literature: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4H14C16.2091 4 18 5.79086 18 8V20C18 18.3431 16.6569 17 15 17H4V4Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 4V16C20 17.1046 19.1046 18 18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  DocumentAI: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 2H14L20 8V22H6V2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="12" width="8" height="2" rx="1" fill="currentColor"/>
      <rect x="8" y="16" width="5" height="2" rx="1" fill="currentColor"/>
    </svg>
  ),
  Regulation: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 15L10 9L13 13L15 11L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  DataTransform: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 7H17C18.1046 7 19 7.89543 19 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 17H7C5.89543 17 5 16.1046 5 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Action Icons
  ArrowRight: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
      <polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  ExternalLink: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default Icons;