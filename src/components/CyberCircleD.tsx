import React, { useEffect, useState } from 'react';

const CyberCircleD = ({ className = "" }) => {
  // ハイドレーションが終わったかどうかを管理するステート
  const [isMounted, setIsMounted] = useState(false);

  // マウント時に一度だけ実行
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // サーバーサイド（またはマウント前）では何も表示しない、
  // もしくはランダム値を含まないスケルトンを表示する
  if (!isMounted) {
    return <div className={className} />; // もしくは空の <svg>
  }


  return (
  <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} overflow-visible`}>
    {[98, 94, 90, 82, 78, 74, 66, 62, 58, 48, 44, 40, 30, 26, 22].map((radius, i) => (
      <circle
        key={i}
        cx="100"
        cy="100"
        r={radius}
        stroke="currentColor"
        strokeWidth={i % 3 === 0 ? 3 : 0.5}
        strokeDasharray={`${Math.random() * 200 + 100} ${Math.random() * 300 + 100}`}
        strokeDashoffset={Math.random() * 600}
        opacity={Math.random() * 0.5 + 0.2}
      />
    ))}
    <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="4" opacity="0.3" />
  </svg>
);



};

export default CyberCircleD;