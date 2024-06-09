'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Loader.module.scss';
import { LoaderContent } from './LoaderContent/LoaderContent';

export const Loader = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevState) => {
        if (prevState === 3) {
          clearInterval(progressInterval);
          setIsVisible(false);
          return prevState;
        }
        window.scrollTo(0, 0);
        return prevState + 1;
      });
    }, 1000);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <div className={styles.loaderBg} />
          <LoaderContent progress={progress} />
        </>
      )}
    </AnimatePresence>
  );
};
