import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedCounter = ({
  icon,
  label,
  end,
  duration = 5,
  delay = 0,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on client
    setIsClient(true);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  if (!isClient) return null; // prevent SSR-related issues

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="col-md-2 text-center"
    >
      <div className="logo mb-2">{icon}</div>
      {inView && (
        <CountUp start={0} end={end} duration={duration}>
          {({ countUpRef }) => <span ref={countUpRef} className="h4 d-block" />}
        </CountUp>
      )}
      <p>{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
