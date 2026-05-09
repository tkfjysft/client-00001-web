export const LogoLogicRefraction = ({ className }: { className?: string }) => (
<svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 鋭く転換するパス */}
    <path 
      d="M30 70 L50 30 L80 50" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinejoin="round" 
      strokeLinecap="round" 
    />
    {/* 転換の起点にあるドット */}
    <circle cx="50" cy="30" r="5" fill="white" stroke="currentColor" strokeWidth="2" />
  </svg>
);