'use client';
import { MotionValue, Variants, motion, useTransform } from 'framer-motion';
import { useMemo } from 'react';
import styles from './Marquee.module.scss';

interface MarqueeTextProps {
  className?: string;
  text: string;
  inputRange?: number[];
  outputRange?: unknown[];
  scrollYProgress: MotionValue<number>;
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0.7,
    rotateX: '-90deg',
  },
  visible: {
    opacity: 1,
    rotateX: '0deg',
  },
};
const letterTransition = { duration: 0.3, ease: 'easeInOut' };

const containerTrasnition = {
  staggerChildren: 0.6,
  staggerDirection: -1,
};

export const Marquee = ({
  text,
  scrollYProgress,
  inputRange = [0, 1],
  outputRange = ['100%', '-100%'],
}: MarqueeTextProps) => {
  const arrayOfText = useMemo(() => Array.from(text), [text]);
  const marqueeX = useTransform(scrollYProgress, inputRange, outputRange);

  const style = useMemo(() => {
    return {
      x: marqueeX,
    };
  }, [marqueeX]);

  return (
    <motion.div
      className={styles.marqueeContainer}
      transition={containerTrasnition}
      style={style}
    >
      {arrayOfText.map((item, index) => {
        return (
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={letterTransition}
            variants={letterVariants}
            key={index}
          >
            {item === ' ' ? <pre>{item}</pre> : item}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
