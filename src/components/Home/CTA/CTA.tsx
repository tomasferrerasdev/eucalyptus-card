'use client';
import { AnimatedElement, AnimatedText, VideoComponent } from '@/components';
import { useWindowDimensions } from '@/hooks';
import { breakpointMob, breakpointTablet } from '@/utils';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './CTA.module.scss';

interface CTAProps {
  className?: string;
}

const transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

export const CTA = ({ className }: CTAProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const { width } = useWindowDimensions();

  const { scrollYProgress: scrollYProgress } = useScroll({
    target: ref,
  });

  const { scrollYProgress: scrollYProgressInner } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const useParallax = (value: MotionValue<number>) => {
    return useTransform(
      value,
      [0, 1],
      width > breakpointTablet ? [800, 0] : [0, 0]
    );
  };

  const y = useParallax(scrollYProgressInner);

  const style = useMemo(() => {
    return { y: y };
  }, [y]);

  const title = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', width > breakpointMob ? '750%' : '300%']
  );
  const slice = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const spanTop = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const spanBottom = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);

  const titleStyles = useMemo(() => {
    return { x: '-50%', y: title };
  }, [title]);

  const sliceTopPartStyles = useMemo(() => {
    return { top: slice };
  }, [slice]);

  const sliceBottomPartStyles = useMemo(() => {
    return { bottom: slice };
  }, [slice]);

  const spanTopStyles = useMemo(() => {
    return { y: spanTop };
  }, [spanTop]);

  const spanBottomStyles = useMemo(() => {
    return { y: spanBottom };
  }, [spanBottom]);

  const [prevIsVisible, setPrevIsVisible] = useState<boolean | null>(null);
  const handleScroll = () => {
    if (ref.current) {
      const section = ref.current;
      const sectionTop = section.offsetTop;
      const viewportBottom = window.scrollY + window.innerHeight;
      const isSectionVisible =
        viewportBottom >= sectionTop + section.clientHeight / 2;

      if (isSectionVisible !== prevIsVisible) {
        setPrevIsVisible(isSectionVisible);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevIsVisible]);

  return (
    <section
      ref={ref}
      className={`${styles['BecomeDistributorSection']} ${className}`}
    >
      <div className={styles['stickyContainer']}>
        <div className={styles['BecomeDistributorSection__content']}>
          <VideoComponent src="/video/CTA.mp4" />
          <motion.div
            style={style}
            className={styles['BecomeDistributorSection__content_inner']}
          >
            <h2 className="h1">
              <AnimatedText title>
                it all starts in the eucalyptus app
              </AnimatedText>
            </h2>
            <p
              className={
                styles['BecomeDistributorSection__content_description']
              }
            >
              <AnimatedText>
                Add it all up and you get limitless cash back in your pocket.
                And a whole lot of peace of mind. The app is the smart way to
                manage your money.
              </AnimatedText>
            </p>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <div className={styles.qrscan}>
                <Image
                  src={`/images/qrcode.svg`}
                  alt="qr"
                  width={92}
                  height={92}
                />
                <p>Get the app</p>
              </div>
            </AnimatedElement>
          </motion.div>
        </div>
        <motion.div
          transition={transition}
          style={sliceTopPartStyles}
          className={styles['top']}
        >
          <motion.div className={styles['title']} style={titleStyles}>
            <h6 className="h6">Eucalyptus Card</h6>
            <h4 className="h4">Crafted Coin Creations</h4>
          </motion.div>
          <motion.span
            style={spanTopStyles}
            className={styles['text']}
            transition={transition}
          >
            start today
          </motion.span>
        </motion.div>
        <motion.div
          transition={transition}
          style={sliceBottomPartStyles}
          className={styles['bottom']}
        >
          <motion.span
            transition={transition}
            style={spanBottomStyles}
            className={styles['text']}
          >
            start today
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};
