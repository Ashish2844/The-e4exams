import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedOnView = ({
  children,
  direction,
  delay = 0,
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnView;
