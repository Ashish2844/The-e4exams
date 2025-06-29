import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedCounter = ({ icon, label, end, duration = 2, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="col-md-2 text-center"
    >
      <div className="logo mb-2">{icon}</div>
      {startCount ? (
        <CountUp start={0} end={end} duration={duration}>
          {({ countUpRef }) => <span ref={countUpRef} className="h4 d-block" />}
        </CountUp>
      ) : (
        <span className="h4 d-block">0</span>
      )}
      <p>{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
