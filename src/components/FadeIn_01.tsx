import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface FadeIn_01Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  speed?: number;    
  speedX?: number;   
  stiffness?: number;
  className_inner?: string;
}

export const FadeIn_01 = ({ 
  children, 
  delay = 0, 
  className, 
  speed = 1,        
  speedX = 0,      
  stiffness = 50,   
  className_inner,
}: FadeIn_01Props) => {

  	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

	const rawY = useTransform(scrollYProgress, [0, 1], [200 * speed, -200 * speed]);
    const y = useSpring(rawY, {
      stiffness: stiffness,  
      damping: 25,    
      restDelta: 0.01
    });
	
    const rawX = useTransform(scrollYProgress, [0, 1], [100 * speedX, -100 * speedX]);
    const x = useSpring(rawX, { stiffness, damping: 25, restDelta: 0.01 });




  return (
    <motion.div
      ref={ref}
      className={className} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
      style={{
        willChange: "opacity" ,
      }}
    >

      <motion.div style={{ 
		y, x,
		willChange: "transform" ,
		 }} 
		 className={`block w-full h-full ${className_inner}`}>
          {children}
      </motion.div>
    </motion.div>
  );
};