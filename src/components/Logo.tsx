// src/components/Logo.tsx

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const gradientId = "logo-gradient-balanced";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 240" 
      // overflow-visibleは維持して、絶対に欠けないようにします
      className={`overflow-visible ${props.className}`} 
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      <g transform="translate(200, 45)">
        {/* 1. シンボルマーク：サイズを適正化 */}
        <g fill={`url(#${gradientId})`} transform="translate(-45, 0)">
          <rect x="0" y="8" width="28" height="28" rx="6" />
          <rect x="32" y="0" width="28" height="28" rx="6" />
          <rect x="64" y="8" width="28" height="28" rx="6" />
          <rect x="30" y="34" width="28" height="28" rx="6" opacity="0.8" />
          <rect x="0" y="60" width="28" height="28" rx="6" />
          <rect x="32" y="68" width="28" height="28" rx="6" />
          <rect x="64" y="60" width="28" height="28" rx="6" />
        </g>

        {/* 2. テキスト：読みやすく、かつ主張のあるサイズ */}
        <text
          x="0"
          y="160"
          fontFamily="Arial Black, Gadget, sans-serif"
          fontWeight="900"
          fontSize="70" 
          fill="white"
          textAnchor="middle"
          letterSpacing="-3"
        >
          SERVICTY
        </text>

        {/* 3. アクセントライン */}
        <rect x="-100" y="175" width="200" height="6" fill={`url(#${gradientId})`} rx="3" />
      </g>
    </svg>
  );
};