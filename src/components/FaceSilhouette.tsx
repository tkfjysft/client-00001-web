import React, { useId } from 'react';

interface FaceSilhouetteProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
  startColor?: string;
  startOpacity?: number;
  endColor?: string;
  endOpacity?: number;
  flip?: boolean;
}

export const FaceSilhouette: React.FC<FaceSilhouetteProps> = ({
  size = "w-32",
  startColor = "var(--color-clr-primary-1)", // デフォルト値をCSS変数に
  startOpacity = 1,
  endColor = "var(--color-clr-primary-1)",
  endOpacity = 0.2, // 終わりを薄くしてグラデーション感を出す
  className = "",
  flip = false,
  ...props
}) => {
  const gradientId = useId();

  return (
    <div
      className={`${size} ${className} flex items-center justify-center`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 113.6 158.5" // 取得したコードのwidth/heightを反映
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        {...props}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0" x2="0" y1="0" y2="158.5" // 上から下へのグラデーション
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={startColor} stopOpacity={startOpacity} />
            <stop offset="1" stopColor={endColor} stopOpacity={endOpacity} />
          </linearGradient>
        </defs>
        <g 
          stroke={`url(#${gradientId})`} // 線にグラデーションを適用
          strokeWidth="0.3" // 線の太さを調整
          strokeMiterlimit="10"
        >
          <path d="M107.145 49.326c-4.039 16.932-12.464 24.264-13.563 36.046-1.799 19.275 11.562 34.506 18.237 55.906M38.226 156.392c3.254-2.923 7.689-6.715 13.379-14.544 7.8-10.733-3.082-34.984-10.548-32.597-10.571 3.381-19.217 4.344-22.593 2.16-5.361-3.467-2.976-9.848-3.213-10.896-.876-3.853-7.36-.782-3.154-8.487-2.629-.782-5.316-2.287-4.615-4.273.298-.846 3.33-5.659-.292-6.32-3.824-.699-5.685-2.321-5.329-5.672C2.328 71.369 9.643 64.4 9.76 55.37c.022-1.702-1.402-6.501-2.07-8.551-2.263-6.936-1.336-19.614 3.397-26.429 2.012-2.895 7.454-11.242 16.499-18.397" />
        </g>
      </svg>
    </div>
  );
};