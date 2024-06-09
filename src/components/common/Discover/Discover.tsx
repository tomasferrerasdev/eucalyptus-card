'use client';
import { breakpointMob } from '@/utils';
import { MotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import styles from './Discover.module.scss';
import { FlipCoinTypes } from './assets/FlipCoinTypes';
const loaderJsonPromise = import('./assets/flipCoin.json');

interface DiscoverProps {
  scrollYProgress: MotionValue<number>;
}

export const Discover = ({ scrollYProgress }: DiscoverProps) => {
  const refLottie = useRef<LottieRefCurrentProps | null>(null);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 61]);
  const { width } = useWindowSize();

  const [loaderJson, setLoaderJson] = useState<FlipCoinTypes | null>(null);
  const [prevProgress, setPrevProgress] = useState(0);

  useMotionValueEvent(progress, 'change', (latest) => {
    const roundedLatest = Math.round(latest);

    if (width < breakpointMob) {
      if (roundedLatest === 0 && prevProgress > 50) return;
    }

    if (roundedLatest === 0 && prevProgress > 58) {
      return;
    }

    if (roundedLatest !== prevProgress) {
      refLottie.current?.goToAndStop(roundedLatest, true);
      setPrevProgress(roundedLatest);
    }
  });

  useEffect(() => {
    loaderJsonPromise.then((data) => {
      setLoaderJson(data.default as FlipCoinTypes);
    });
  }, []);

  return (
    <div className={styles.imageContainer}>
      <Lottie
        animationData={loaderJson}
        lottieRef={refLottie}
        autoplay={false}
      />
    </div>
  );
};
