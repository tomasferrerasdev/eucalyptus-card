'use client';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

export const CustomCursor = () => {
  const cursor = useRef(null);
  const cursorSize = 16;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
        ref={cursor}
      ></motion.div>
    </div>
  );
};
