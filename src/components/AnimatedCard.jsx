// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const AnimatedCard = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
