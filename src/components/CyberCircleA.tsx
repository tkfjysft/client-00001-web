import React from 'react';

export default function CyberCircle01({ className = "" }) {

return (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* --- 第1レイヤー：外郭の巨大な互い違い --- */}
    {/* 右上から始まる200度以上の太い弧 */}
    <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="2" strokeDasharray="360 240" strokeDashoffset="0" opacity="0.4" />
    {/* 左下（点対称）から始まる180度の細い弧 */}
    <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="300 300" strokeDashoffset="300" opacity="0.3" />
    {/* 真上から始まる短い極太アクセント */}
    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="12" strokeDasharray="80 520" strokeDashoffset="450" opacity="0.15" />

    {/* --- 第2レイヤー：中間層の不規則ストリーム --- */}
    <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.8" strokeDasharray="400 200" strokeDashoffset="120" opacity="0.5" />
    <circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="5" strokeDasharray="150 450" strokeDashoffset="400" opacity="0.3" />
    <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="2.2" strokeDasharray="250 350" strokeDashoffset="50" opacity="0.6" />
    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" strokeDasharray="500 100" strokeDashoffset="280" opacity="0.4" />

    {/* --- 第3レイヤー：内郭の重厚な干渉エリア --- */}
    <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="15" strokeDasharray="100 500" strokeDashoffset="180" opacity="0.1" />
    <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="4" strokeDasharray="220 380" strokeDashoffset="350" opacity="0.5" />
    <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" strokeDasharray="300 300" strokeDashoffset="80" opacity="0.7" />
    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="8" strokeDasharray="120 480" strokeDashoffset="480" opacity="0.25" />

    {/* --- 第4レイヤー：コア周辺の高速回転イメージ --- */}
    <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="180 180" strokeDashoffset="220" opacity="0.6" />
    <circle cx="100" cy="100" r="34" stroke="currentColor" strokeWidth="6" strokeDasharray="60 540" strokeDashoffset="10" opacity="0.4" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="140 220" strokeDashoffset="150" opacity="0.5" />
    <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="10" strokeDasharray="40 560" strokeDashoffset="400" opacity="0.1" />

    {/* --- 第5レイヤー：最中心の収束ライン --- */}
    <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="3" strokeDasharray="60 30" strokeDashoffset="90" opacity="0.4" />
    <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="5" strokeDasharray="20 30" strokeDashoffset="0" opacity="0.2" />
  </svg>
);


// return (
//   <svg
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* --- 点対称・長角ライン・セクション --- */}
//     {/* 外側：太めの半円（基準） */}
//     <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="4" strokeDasharray="301 141" strokeDashoffset="100" opacity="1" />
//     {/* 対称位置：半径を少し絞り、200度以上の長い弧 (200度 ≒ 330px / 360度 ≒ 596px) */}
//     <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="8" strokeDasharray="350 246" strokeDashoffset="301" opacity="0.3" />
    
//     {/* --- 外郭・ランダムレイヤー --- */}
//     <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="500 100" strokeDashoffset="40" opacity="0.2" />
//     <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="20" strokeDasharray="150 450" strokeDashoffset="210" opacity="0.15" />
//     <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="5" strokeDasharray="400 200" strokeDashoffset="120" opacity="0.5" />

//     {/* --- 中間層・高密度ランダムレイヤー --- */}
//     <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="36" strokeDasharray="80 520" strokeDashoffset="50" opacity="0.1" />
//     <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="3" strokeDasharray="350 250" strokeDashoffset="310" opacity="0.6" />
//     <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="9" strokeDasharray="220 380" strokeDashoffset="180" opacity="0.4" />
//     <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="0.6" strokeDasharray="580 20" strokeDashoffset="400" opacity="0.5" />
//     <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="24" strokeDasharray="120 480" strokeDashoffset="95" opacity="0.2" />

//     {/* --- 内郭層・複雑干渉レイヤー --- */}
//     <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="3" strokeDasharray="450 150" strokeDashoffset="260" opacity="0.4" />
//     <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="16" strokeDasharray="60 540" strokeDashoffset="10" opacity="0.3" />
//     <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="1.2" strokeDasharray="300 300" strokeDashoffset="150" opacity="0.7" />
//     <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="28" strokeDasharray="100 500" strokeDashoffset="320" opacity="0.1" />
//     <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="6.4" strokeDasharray="210 390" strokeDashoffset="70" opacity="0.5" />

//     {/* --- 中心層・コア・ストリーム --- */}
//     <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.6" strokeDasharray="150 150" strokeDashoffset="200" opacity="0.6" />
//     <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="12" strokeDasharray="40 560" strokeDashoffset="130" opacity="0.4" />
//     <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="4" strokeDasharray="80 220" strokeDashoffset="10" opacity="0.5" />
//     <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="8" strokeDasharray="30 70" strokeDashoffset="45" opacity="0.3" />
//     <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
//   </svg>
// );


//   return (
//   <svg
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* 外郭層：極太から極細までを混在 */}
//     <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="400 200" strokeDashoffset="0" opacity="0.2" />
//     <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="4" strokeDasharray="320 280" strokeDashoffset="140" opacity="0.4" />
//     <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="1.2" strokeDasharray="500 100" strokeDashoffset="300" opacity="0.3" />
//     <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="8" strokeDasharray="180 420" strokeDashoffset="50" opacity="0.2" />
//     <circle cx="100" cy="100" r="87" stroke="currentColor" strokeWidth="0.8" strokeDasharray="250 350" strokeDashoffset="210" opacity="0.5" />

//     {/* 中間層：さらに密度を上げ、重なりを強化 */}
//     <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="12" strokeDasharray="150 450" strokeDashoffset="90" opacity="0.15" />
//     <circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="2.5" strokeDasharray="400 200" strokeDashoffset="330" opacity="0.6" />
//     <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.4" strokeDasharray="550 50" strokeDashoffset="120" opacity="0.4" />
//     <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="9" strokeDasharray="200 400" strokeDashoffset="180" opacity="0.3" />
//     <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1.5" strokeDasharray="300 300" strokeDashoffset="45" opacity="0.5" />
//     <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="15" strokeDasharray="100 500" strokeDashoffset="270" opacity="0.1" />
//     <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3.2" strokeDasharray="380 220" strokeDashoffset="110" opacity="0.4" />

//     {/* 内郭層：複雑に絡み合うコア周辺 */}
//     <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="0.2" strokeDasharray="580 20" strokeDashoffset="200" opacity="0.6" />
//     <circle cx="100" cy="100" r="51" stroke="currentColor" strokeWidth="7" strokeDasharray="120 480" strokeDashoffset="310" opacity="0.4" />
//     <circle cx="100" cy="100" r="47" stroke="currentColor" strokeWidth="2" strokeDasharray="350 250" strokeDashoffset="40" opacity="0.7" />
//     <circle cx="100" cy="100" r="43" stroke="currentColor" strokeWidth="10" strokeDasharray="80 520" strokeDashoffset="160" opacity="0.2" />
//     <circle cx="100" cy="100" r="39" stroke="currentColor" strokeWidth="4.5" strokeDasharray="280 320" strokeDashoffset="290" opacity="0.5" />
//     <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="450 150" strokeDashoffset="75" opacity="0.3" />

//     {/* 中心層：収束する情報の渦 */}
//     <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="14" strokeDasharray="60 540" strokeDashoffset="130" opacity="0.1" />
//     <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="3" strokeDasharray="180 420" strokeDashoffset="250" opacity="0.6" />
//     <circle cx="100" cy="100" r="19" stroke="currentColor" strokeWidth="0.5" strokeDasharray="300 300" strokeDashoffset="10" opacity="0.8" />
//     <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="8" strokeDasharray="40 560" strokeDashoffset="340" opacity="0.3" />
//     <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="2.5" strokeDasharray="150 450" strokeDashoffset="60" opacity="0.5" />
//   </svg>
// );


// return (
//   <svg
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* 外郭層：しっかりとした厚みの外枠ライン */}
//     <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="3" strokeDasharray="400 200" strokeDashoffset="10" opacity="0.4" />
//     <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" strokeDasharray="200 400" strokeDashoffset="240" opacity="0.2" />
//     <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="4" strokeDasharray="300 300" strokeDashoffset="100" opacity="0.5" />

//     {/* 中間層：さらに太さを強調したメインストリーム */}
//     <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="6" strokeDasharray="250 350" strokeDashoffset="50" opacity="0.6" />
//     <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="2" strokeDasharray="450 150" strokeDashoffset="310" opacity="0.3" />
//     <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="8" strokeDasharray="180 420" strokeDashoffset="180" opacity="0.4" />
//     <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3" strokeDasharray="350 250" strokeDashoffset="410" opacity="0.5" />

//     {/* 内郭層：重厚感のあるコアガード */}
//     <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="10" strokeDasharray="120 480" strokeDashoffset="200" opacity="0.3" />
//     <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="4" strokeDasharray="320 280" strokeDashoffset="80" opacity="0.6" />
//     <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="7" strokeDasharray="150 450" strokeDashoffset="350" opacity="0.4" />

//     {/* コア：中心に向かって収束する太いライン */}
//     <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="5" strokeDasharray="100 500" strokeDashoffset="280" opacity="0.7" />
//     <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="3" strokeDasharray="200 400" strokeDashoffset="60" opacity="0.5" />
//     <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="6" strokeDasharray="40 20" strokeDashoffset="15" opacity="0.3" />
//   </svg>
// );


// return (
//   <svg
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* 外郭層：広範囲をカバーする疎なライン */}
//     <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.1" opacity="0.2" />
//     <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.6" strokeDasharray="420 180" strokeDashoffset="10" opacity="0.4" />
//     <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="0.3" strokeDasharray="150 450" strokeDashoffset="240" opacity="0.2" />
//     <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="310 290" strokeDashoffset="100" opacity="0.5" />

//     {/* 中間層：密度を高め、太さもバラつかせたメインレイヤー */}
//     <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
//     <circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="1.2" strokeDasharray="200 400" strokeDashoffset="50" opacity="0.6" />
//     <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.4" strokeDasharray="480 120" strokeDashoffset="310" opacity="0.4" />
//     <circle cx="100" cy="100" r="71" stroke="currentColor" strokeWidth="0.7" strokeDasharray="120 480" strokeDashoffset="180" opacity="0.5" />
//     <circle cx="100" cy="100" r="67" stroke="currentColor" strokeWidth="1.8" strokeDasharray="280 320" strokeDashoffset="410" opacity="0.3" />
//     <circle cx="100" cy="100" r="63" stroke="currentColor" strokeWidth="0.3" strokeDasharray="350 250" strokeDashoffset="15" opacity="0.6" />

//     {/* 内郭層：アクセントとなる重厚なライン */}
//     <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
//     <circle cx="100" cy="100" r="49" stroke="currentColor" strokeWidth="2.2" strokeDasharray="90 510" strokeDashoffset="200" opacity="0.5" />
//     <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.6" strokeDasharray="380 220" strokeDashoffset="80" opacity="0.3" />
//     <circle cx="100" cy="100" r="41" stroke="currentColor" strokeWidth="1.0" strokeDasharray="160 440" strokeDashoffset="350" opacity="0.7" />
//     <circle cx="100" cy="100" r="37" stroke="currentColor" strokeWidth="0.3" strokeDasharray="420 180" strokeDashoffset="120" opacity="0.4" />

//     {/* センターコア付近：微細な回転体 */}
//     <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.1" opacity="0.5" />
//     <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.9" strokeDasharray="110 490" strokeDashoffset="280" />
//     <circle cx="100" cy="100" r="21" stroke="currentColor" strokeWidth="0.4" strokeDasharray="240 360" strokeDashoffset="60" opacity="0.6" />
//     <circle cx="100" cy="100" r="17" stroke="currentColor" strokeWidth="0.1" opacity="0.8" />
    
//     {/* 最中心点 */}
//     <circle cx="100" cy="100" r="7" stroke="currentColor" strokeWidth="0.3" strokeDasharray="30 30" opacity="0.3" />
//     <circle cx="100" cy="100" r="1.5" fill="currentColor" />
//   </svg>
// );


// return (
//   <svg
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* 外郭層：大きく互い違いに配置 */}
//     <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
//     <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1" strokeDasharray="400 200" strokeDashoffset="0" opacity="0.5" />
//     <circle cx="100" cy="100" r="91" stroke="currentColor" strokeWidth="0.5" strokeDasharray="300 300" strokeDashoffset="150" opacity="0.3" />

//     {/* 中間層：半径の差を大きくし、密度の薄い長い線を配置 */}
//     <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.8" strokeDasharray="450 150" strokeDashoffset="40" opacity="0.6" />
//     <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="200 400" strokeDashoffset="280" opacity="0.4" />
//     <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.3" strokeDasharray="500 100" strokeDashoffset="100" opacity="0.5" />

//     {/* 内郭層：重厚なラインを互い違いに重ねる */}
//     <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="2" strokeDasharray="150 450" strokeDashoffset="60" opacity="0.7" />
//     <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="300 300" strokeDashoffset="210" opacity="0.3" />
//     <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="1.2" strokeDasharray="100 500" strokeDashoffset="10" opacity="0.6" />

//     {/* コア付近：細いラインの集中 */}
//     <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.2" opacity="0.8" />
//     <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="120 480" strokeDashoffset="180" />
    
//     {/* センターコア */}
//     <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="0.3" strokeDasharray="40 20" opacity="0.4" />
//     <circle cx="100" cy="100" r="1.5" fill="currentColor" />
//   </svg>
// );

  // return (
  //   <svg
  //     viewBox="0 0 200 200"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     className={className}
  //   >
  //     {/* 1. 外郭：ほぼ1周に近い長い弧 */}
  //     <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
  //     <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.8" strokeDasharray="500 100" opacity="0.4" />

  //     {/* 2. メイン・オービット：複数の長い線が重なり合う層 */}
  //     <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.2" strokeDasharray="300 300" opacity="0.6" />
  //     <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="0.5" strokeDasharray="400 200" opacity="0.3" strokeDashoffset="50" />
      
  //     {/* 3. ミドル・ストリーム：さらに密度を上げた円状の線 */}
  //     <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
  //     <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" strokeDasharray="250 350" opacity="0.7" />
  //     <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      
  //     {/* 4. インナー・リング：重厚感のある太めの長い弧 */}
  //     <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="2.5" strokeDasharray="150 450" opacity="0.4" />
  //     <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="2.5" strokeDasharray="80 520" opacity="0.2" strokeDashoffset="200" />

  //     {/* 5. コア・アクセス：中心付近の細い同心円 */}
  //     <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
  //     <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="0.8" strokeDasharray="180 420" />
  //     <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="0.2" opacity="0.8" />
      
  //     {/* 6. 最中心部 */}
  //     <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
  //     <circle cx="100" cy="100" r="2" fill="currentColor" />
  //   </svg>
  // );


// return (
//     <svg
//       viewBox="0 0 200 200"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       {/* 1. 最外郭：薄い破線のスキャン層 */}
//       <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" opacity="0.2" />
//       <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="0.5" strokeDasharray="160 40" opacity="0.4" />

//       {/* 2. 情報ストリーム層：細かいドットの高速回転イメージ */}
//       <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
//       <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      
//       {/* 3. メイン・プロテクト層：長い弧が重なり合う */}
//       <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="100 150" opacity="0.7" />
//       <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="50 200" opacity="0.3" strokeDashoffset="120" />
      
//       {/* 4. ミドル・グリッド層：多重の同心円 */}
//       <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
//       <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.8" strokeDasharray="10 10" />
//       <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />

//       {/* 5. サブ・システム層：不規則なセグメント */}
//       <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="20 40 10 30" opacity="0.6" />
//       <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

//       {/* 6. インナー・コア層：中心部の高密度エリア */}
//       <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="0.5" />
//       <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
//       <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.2" opacity="0.8" />
      
//       {/* 7. センター・ポイント */}
//       <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
//       <circle cx="100" cy="100" r="1.5" fill="currentColor" />
//     </svg>
//   );



  
// return (
//     <svg
//       viewBox="0 0 200 200"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       {/* 最外郭：薄いガイドライン */}
//       <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
      
//       {/* メインの破線円：高速通信やビットをイメージ */}
//       <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="1 4" />
      
//       {/* 二重の細いライン */}
//       <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
//       <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      
//       {/* 断続的な太いライン：セクターやブロックをイメージ */}
//       <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="2" strokeDasharray="40 160" opacity="0.8" />
//       <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="2" strokeDasharray="20 180" opacity="0.4" strokeDashoffset="100" />
      
//       {/* 中心の多層円：コア・アクセスをイメージ */}
//       <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
//       <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1" />
//       <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
      
//       {/* 最中心部：ドット */}
//       <circle cx="100" cy="100" r="2" fill="currentColor" />
//     </svg>
//   );






  // return (
  //   <svg
  //     viewBox="0 0 200 200"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     className={className}
  //   >
  //     {/* 外郭の正円 */}
  //     <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
  //     <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
      
  //     {/* 垂直・水平のセンターライン */}
  //     <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
  //     <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />

  //     {/* 内側のグリッド線（線画的な抽象表現） */}
  //     <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
  //     <path d="M40 100 H160 M100 40 V160" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      
  //     {/* 4隅のノード（ドット） */}
  //     <circle cx="70" cy="70" r="1.5" fill="currentColor" />
  //     <circle cx="130" cy="70" r="1.5" fill="currentColor" />
  //     <circle cx="70" cy="130" r="1.5" fill="currentColor" />
  //     <circle cx="130" cy="130" r="1.5" fill="currentColor" />

  //     {/* センターコア */}
  //     <circle cx="100" cy="100" r="4" stroke="currentColor" strokeWidth="1" />
  //     <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 1" />
  //   </svg>
  // );





};