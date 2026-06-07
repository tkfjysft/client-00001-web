import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface FadeIn_01Props {
  children: React.ReactNode;
  delay?: number;
  className?: string; // Gridの配置クラスを受け取るために追加
  speed?: number;      // 移動する距離の倍率
  speedX?: number;    // X軸の移動倍率（追加）
  stiffness?: number;  // バネの硬さ（個体差を出す）
  className_inner?: string;
}

export const FadeIn_01 = ({ 
  children, 
  delay = 0, 
  className, 
  speed = 1,        // デフォルトは 1
  speedX = 0,        // デフォルトは 0（垂直移動）
  stiffness = 50,     // デフォルトは 50
  className_inner,
}: FadeIn_01Props) => {

  	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

	// Y軸の動き
	// speed を使って移動距離に変化をつける
	// [200 * speed, -200 * speed] とすることで、個別に移動量が変わります
	const rawY = useTransform(scrollYProgress, [0, 1], [200 * speed, -200 * speed]);
    // このバネ設定を加えると、一気に高級感が出ます
    const y = useSpring(rawY, {
      stiffness: stiffness,  // 低くすると、より「重厚感」が出る
      damping: 25,    // 揺れを抑える。数値が高いほどヌルっと止まる
      restDelta: 0.01
    });
	
	// X軸の動き（追加）
    const rawX = useTransform(scrollYProgress, [0, 1], [100 * speedX, -100 * speedX]);
    const x = useSpring(rawX, { stiffness, damping: 25, restDelta: 0.01 });



	// 0(画面下) → 0.5(画面中央) → 1(画面上) という進捗に合わせて、
	// 0.1(薄い) → 0.6(濃い) → 0.1(薄い) と変化させます
	// const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0.1, 0.2, 0.5, 0.2, 0.1]);
	// これも「慣性」をつけると、明るさの変化までヌルっとします
	// const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

	// 開発ツールで数値が動くか確認するため、
	// あえて [0, 1] 全域で大きく動く設定にします
	// const y = useTransform(scrollYProgress, [0, 1], [300, -600]);
	// const y = useTransform(scrollYProgress, [0, 1], [0, 120]); // ゆっくり沈む	

  return (
    <motion.div
      ref={ref}
      className={className} // absoluteなどの配置
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
      style={{
        // 外側は透明度の変化を予告
        willChange: "opacity" ,
      }}
    >
      {/* 
        さらに内側に「実際に動く箱」を置く。
        display: block を明示し、childrenを包み込む。
      */}
      <motion.div style={{ 
		y, x,
        // opacity: smoothOpacity // スクロール連動の透明度はここ！
		// 内側は移動（回転含む）の変化を予告
		willChange: "transform" ,
		 }} 
		 className={`block w-full h-full ${className_inner}`}>
          {children}
      </motion.div>
    </motion.div>
  );
};