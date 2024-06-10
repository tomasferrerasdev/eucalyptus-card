'use client';
import { LazyMotion, domAnimation, motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import styles from './AnimatedElement.module.scss';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export const AnimatedElement = ({
  children,
  className,
  delay = 0,
  reverse,
}: AnimatedElementProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const elementFrame = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'anticipate',
        duration: 1.2,
        delay,
      },
    },
    hidden: {
      opacity: 0,
      y: reverse ? -15 : 15,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={`${styles.element} ${className ? className : ''}`}
        variants={elementFrame}
        initial="hidden"
        animate={isInView ? 'visible' : ''}
        ref={ref}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
};
