export const LogoBinaryOrbit = ({ className }: { className?: string }) => (
<svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 基盤となる既存のライン */}
    <path d="M20 60 H60" stroke="currentColor" strokeWidth="4" opacity="0.3" strokeLinecap="round" />
    {/* 転換し、跳躍するライン */}
    <path d="M20 40 H45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    {/* 跳躍した先にある「新しい意識」 */}
    <circle cx="70" cy="30" r="6" fill="currentColor" />
    {/* 導かれる軌跡（ごく細い線） */}
    <path d="M45 40 Q60 40 70 30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);