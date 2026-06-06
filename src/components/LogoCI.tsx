import React from 'react';

interface LogoCIProps {
	className?: string;
	fill?: string;
	stroke?: string; 
    strokeWidth?: string; 
}

export default function LogoCI({
		className = "",
		fill = "currentColor",
		stroke = "none", // デフォルトの色
		strokeWidth = "0",       // デフォルトの太さ（テキストや塗りを潰さないため）
  }:LogoCIProps) {
  return (
<>

<svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" // イラレのクリップパス（xlink:href）をReactで動かすために追加
      viewBox="0 0 265 76"
      className={`w-full h-auto ${className}`}
      fill={fill}
      // 💡 一番外側のSVGに指定を流し込みます
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    >
      <g id="レイヤー_9" display="none"></g>
      <g id="レイヤー_1" display="none"></g>
      <g id="ガイド" display="none"></g>
      <g id="レイヤー_2" display="none"></g>
      <g id="ci_x5F_logo"></g>
      
      <g id="ci_x5F_logoのコピー">
        {/* 💡 テキストにstroke（フチ線）が太く当たると文字が潰れるため、
            もし文字の線を消したい場合は、タグ個別に stroke="none" を指定するのもアリです */}
        <text 
          transform="matrix(1 0 0 1 37.6929 60.2793)" 
          fill={fill}
          fontFamily="'NotoSansJP-Medium'" 
          fontSize="11"
        >
          モーションシンク
        </text>
      </g>
      
      <g id="_irasuto"></g>
      <g id="face_x5F_left"></g>
      
      <g id="face_x5F_right_1_">
        <text 
          transform="matrix(1 0 0 1 67.4644 47.4102)" 
          fill={fill}
          fontFamily="'LibertinusSans-Bold'" 
          fontSize="33.0397"
        >
          MotionSync
        </text>
        
        <g>
          <defs>
            <polygon id="SVGID_62_" points="75.718,34.396 74.079,22.774 71.68,16.799 62.997,7.42 50.095,1.667 40.446,1.995 31.916,2.84 
              24.16,5.715 16.725,9.897 10.551,15.335 5.301,27.597 3.323,36.315 3.98,46.23 12.479,61.636 26.104,71.347 40.882,39 
              71.314,55.657 73.404,52.438 74.385,48.969 76.251,42.883" />
          </defs>
          
          <clipPath id="SVGID_3_">
            <use xlinkHref="#SVGID_62_" overflow="visible" /> {/* ※React用に xlink:href ➔ xlinkHref に修正 */}
          </clipPath>
          
          <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="17.3462" y1="38.3877" x2="64.0142" y2="38.3877">
            <stop offset="0" style={{ stopColor: `${fill}` }} /> {/* ※React用にオブジェクト形式に修正 */}
            <stop offset="1" style={{ stopColor: `${fill}`, stopOpacity: 0.1 }} />
          </linearGradient>
          
          {/* 💡 元々イラレ側で太さ7のストローク（グラデーション）が入っているサークルです。
              もし外からの strokeWidth をここに強制適用したい場合は、
              strokeWidth={strokeWidth} に置き換えてもOKです */}
          <circle 
            clipPath="url(#SVGID_3_)" 
            fill="none" 
            stroke="url(#SVGID_5_)" 
            strokeWidth="7" 
            strokeMiterlimit="10" 
            cx="40.68" 
            cy="38.387" 
            r="19.83" 
          />
        </g>
      </g>
    </svg>


</>



  );
}