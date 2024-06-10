'use client';
import { Coin, Marquee, ParallaxSection, QRScan } from '@/components';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import styles from './Discover.module.scss';

export const Discover = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  return (
    <ParallaxSection
      offset={['end end', 'end start']}
      parallaxValues={[0, 400]}
    >
      <section className={`${styles.benefitsWrapper}`} ref={targetRef}>
        <div className={styles.stickyContainer}>
          <QRScan />
          <Coin scrollYProgress={scrollYProgress} />
          <Marquee
            text={
              'Discover meet Eucalyptus credit card. Safe, private and secure.'
            }
            scrollYProgress={scrollYProgress}
            outputRange={['75%', '-100%']}
          />
        </div>
      </section>
    </ParallaxSection>
  );
};
