export function CodeMuseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path 
        d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" 
        fill="url(#gradient)"
      />
      <path d="M45 36H75V48H45V36Z" fill="white"/>
      <path d="M36 60H84V72H36V60Z" fill="white"/>
      <path d="M45 84H75V96H45V84Z" fill="white"/>
    </svg>
  );
}
