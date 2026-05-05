
import React from 'react';

export default function CyberCircle05({ className = "" }) {

return (
  <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} overflow-visible`}>
    {/* 超長角（200度〜300度）のメインラインを多層化 */}
    <circle cx="100" cy="100" r="97" stroke="currentColor" strokeWidth="11" strokeDasharray="400 200" strokeDashoffset="0" opacity="0.4" />
    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="2" strokeDasharray="520 80" strokeDashoffset="300" opacity="0.3" />
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="11" strokeDasharray="380 220" strokeDashoffset="150" opacity="0.2" />
    
    <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="4" strokeDasharray="450 150" strokeDashoffset="420" opacity="0.5" />
    <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="25" strokeDasharray="120 480" strokeDashoffset="100" opacity="0.08" />
    <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="1.2" strokeDasharray="540 60" strokeDashoffset="240" opacity="0.6" />
    
    <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="9" strokeDasharray="320 280" strokeDashoffset="310" opacity="0.3" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" strokeDasharray="480 120" strokeDashoffset="50" opacity="0.4" />
    <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="16" strokeDasharray="150 450" strokeDashoffset="480" opacity="0.15" />
    
    <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="0.8" strokeDasharray="560 40" strokeDashoffset="200" opacity="0.5" />
    <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="14" strokeDasharray="200 400" strokeDashoffset="350" opacity="0.2" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="3" strokeDasharray="420 180" strokeDashoffset="10" opacity="0.6" />
    
    <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="12" strokeDasharray="100 500" strokeDashoffset="180" opacity="0.2" />
    <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="300 300" opacity="0.5" />
  </svg>
);

};