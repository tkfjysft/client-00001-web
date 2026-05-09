export const LogoShiftGate = ({ className }: { className?: string }) => (
<svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 下から上へのエネルギー */}
    <path d="M50 80 V50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    {/* 転換点（意識の特異点） */}
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    {/* 左から右へ、次元が変わって伸びる線 */}
    <path d="M50 50 H80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);