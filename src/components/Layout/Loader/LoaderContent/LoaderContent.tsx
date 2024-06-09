import { LazyMotion, domAnimation, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import styles from './LoaderContent.module.scss';
import { MainLottieTypes } from './LoaderTypes';
import { loaderVariant } from './animation';
const loaderJsonPromise = import('./Loader.json');

interface LoaderContentProps {
  progress: number;
}

export const LoaderContent = ({ progress }: LoaderContentProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const [loaderJson, setLoaderJson] = useState<MainLottieTypes | null>(null);

  useEffect(() => {
    loaderJsonPromise.then((data) => {
      setLoaderJson(data.default);
      setIsLoaded(true);
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={styles.loader}
        initial="initial"
        exit="exit"
        animate="animate"
        variants={loaderVariant}
      >
        <div className={styles.loaderLabel}>
          <span>Please wait</span>
          <span>we make money</span>
        </div>
        <motion.div
          className={styles.loaderThumb}
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Lottie
            animationData={loaderJson}
            autoplay={true}
            onLoadedImages={() => setIsLoaded(true)}
          />
        </motion.div>
        <p className={`${styles.loaderTitle} h2`}>
          Page is rolling
          <span className={styles.loaderTitleDot}>.</span>
          <span className={styles.loaderTitleDot}>.</span>
          <span className={styles.loaderTitleDot}>.</span>
        </p>
        <div
          className={`${styles.loaderPercentage} ${styles[`__${progress}`]}  h2`}
        >
          <div className={styles.item}>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.item}>
            <div className={styles.number}>0</div>
            <div className={styles.number}>7</div>
            <div className={styles.number}>3</div>
          </div>
          <div className={styles.item}>
            <div className={styles.number}>0</div>
            <div className={styles.number}>0</div>
            <div className={styles.number}>0</div>
            <div className={styles.number}>0</div>
          </div>
          %
        </div>
      </motion.div>
    </LazyMotion>
  );
};
