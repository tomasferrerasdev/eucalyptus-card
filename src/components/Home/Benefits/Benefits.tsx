'use client';
import { Discover, Marquee, ParallaxSection } from '@/components';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import styles from './Benefits.module.scss';

export const Benefits = () => {
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
          <Discover scrollYProgress={scrollYProgress} />
          <Marquee
            text={'Discover meet MINT credit card. Safe, private and secure.'}
            scrollYProgress={scrollYProgress}
            outputRange={['75%', '-100%']}
          />
        </div>
      </section>
    </ParallaxSection>
  );
};
