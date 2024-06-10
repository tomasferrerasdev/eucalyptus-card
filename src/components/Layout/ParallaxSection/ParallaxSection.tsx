'use client';
import { useWindowDimensions } from '@/hooks';
import { breakpointTablet } from '@/utils';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useMemo, useRef } from 'react';

type offsetVariant =
  | 'start start'
  | 'start center'
  | 'start end'
  | 'center start'
  | 'center center'
  | 'center end'
  | 'end start'
  | 'end center'
  | 'end end';

interface ParallaxSectionProps {
  children?: ReactNode;
  parallaxValues?: [number, number];
  className?: string;
  offset?: [offsetVariant, offsetVariant];
}

export const ParallaxSection = ({
  children,
  parallaxValues = [0, 150],
  className,
  offset = ['start end', 'end start'],
}: ParallaxSectionProps) => {
  const { width } = useWindowDimensions();
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(
      value,
      [0, 1],
      width > breakpointTablet ? parallaxValues : [0, 0]
    );
  };

  const refTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: offset,
  });
  const y = useParallax(scrollYProgress);

  const style = useMemo(() => {
    return { y: y };
  }, [y]);

  return (
    <>
      <motion.div ref={refTarget} className={className} style={style}>
        {children}
      </motion.div>
    </>
  );
};
