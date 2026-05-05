import React from 'react';

export default function CyberCircle03({ className = "" }) {

return (
  <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} overflow-visible`}>
    {/* 外周層：中心を際立たせるための補助的な長い線 */}
    <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.8" strokeDasharray="550 50" opacity="0.2" />
    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="3" strokeDasharray="380 220" strokeDashoffset="140" opacity="0.3" />
    <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="480 120" strokeDashoffset="400" opacity="0.4" />

    {/* 中間層：徐々に太さと本数を増やす */}
    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="6" strokeDasharray="320 280" strokeDashoffset="80" opacity="0.3" />
    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2.5" strokeDasharray="450 150" strokeDashoffset="250" opacity="0.5" />
    <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="10" strokeDasharray="220 380" strokeDashoffset="10" opacity="0.2" />
    <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1" strokeDasharray="500 100" strokeDashoffset="310" opacity="0.4" />

    {/* 中心層：極太かつ複雑に重なるコア・ブロック */}
    <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="18" strokeDasharray="160 440" strokeDashoffset="420" opacity="0.1" />
    <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="6" strokeDasharray="350 250" strokeDashoffset="190" opacity="0.6" />
    <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="22" strokeDasharray="90 510" strokeDashoffset="60" opacity="0.15" />
    <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="8" strokeDasharray="280 320" strokeDashoffset="500" opacity="0.4" />
    <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="14" strokeDasharray="120 480" strokeDashoffset="150" opacity="0.3" />
    <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="9" strokeDasharray="180 420" opacity="0.5" />
    <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="4" opacity="0.6" />
  </svg>
);

};