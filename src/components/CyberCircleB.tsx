import React from 'react';

export default function CyberCircle02({ className = "" }) {

return (
  <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} overflow-visible`}>
    {/* 外郭層：極太かつ長大な弧を複数配置 */}
    <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="14" strokeDasharray="420 180" strokeDashoffset="0" opacity="0.3" />
    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="3" strokeDasharray="500 100" strokeDashoffset="310" opacity="0.4" />
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="10" strokeDasharray="350 250" strokeDashoffset="120" opacity="0.2" />
    <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="1.5" strokeDasharray="480 120" strokeDashoffset="240" opacity="0.5" />
    
    {/* 中間層：密度を上げ、互い違いを強調 */}
    <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="6" strokeDasharray="380 220" strokeDashoffset="50" opacity="0.4" />
    <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="2" strokeDasharray="450 150" strokeDashoffset="400" opacity="0.3" />
    <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="12" strokeDasharray="280 320" strokeDashoffset="180" opacity="0.15" />
    <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.8" strokeDasharray="520 80" strokeDashoffset="30" opacity="0.5" />

    {/* 内郭層：複雑に絡み合うライン */}
    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="16" strokeDasharray="180 420" strokeDashoffset="290" opacity="0.1" />
    <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="4" strokeDasharray="320 280" strokeDashoffset="100" opacity="0.4" />
    <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="400 200" strokeDashoffset="450" opacity="0.6" />
    <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="8" strokeDasharray="150 450" strokeDashoffset="210" opacity="0.3" />
    <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="5" strokeDasharray="60 30" opacity="0.4" />
  </svg>
);


};