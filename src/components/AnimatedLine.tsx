import { motion } from 'framer-motion';

interface AnimatedLineProps {
  classNameDot?: string;
  classNameLine?: string;
  delay?: number;
  width?: string;
  color?: string;
  dotDelay?: number;
  showDot?: boolean; // ドットを表示するかどうかのフラグを追加
}

export default function AnimatedLine({
  classNameDot = "",
  classNameLine = "",
  delay = 0.2,
  width = "w-22",
  color = "bg-clr-primary-1",
  dotDelay = 0.1,
}: AnimatedLineProps){
  return (
    <>
      {/* classNameDot が 存在する時だけドットをレンダリングする */}
      {classNameDot !== "" && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut",
            delay: dotDelay 
          }}
          className={`${classNameDot} rounded-full`}
        />
      )}

      {/* 線は常に表示 */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ 
          duration: 4, 
          ease: [0.22, 1, 0.36, 1], 
          delay: delay 
        }}
        style={{ originX: 0 }}
        className={`${classNameLine} will-change-transform`}
      />
    </>
  );
};