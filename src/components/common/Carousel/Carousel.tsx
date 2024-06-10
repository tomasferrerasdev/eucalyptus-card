'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';
import { BENEFITS } from './benefits';

export const Carousel = () => {
  const sliderRef = useRef<any>(null);
  const slidesRef = useRef<any>(null);

  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState<any>(0);

  const slideMarginRight = 15;
  const totalSlidesMarginRight = slideMarginRight * BENEFITS.length;

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth);
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes;
      const slidesArr = Array.from(slidesNode);
      const slidesSumWidth = slidesArr.reduce(
        (acc, node: any) => acc + node.clientWidth,
        0
      );
      setSlidesWidths(slidesSumWidth);
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener('resize', measureSliderWidth);
    window.addEventListener('resize', measureSlidesWidth);

    return () => {
      window.removeEventListener('resize', measureSliderWidth);
      window.removeEventListener('resize', measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);

  return (
    <div ref={sliderRef} className={styles.slider}>
      <motion.ul
        ref={slidesRef}
        drag="x"
        dragConstraints={{
          left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
          right: 0,
        }}
        dragElastic={0.2}
        dragTransition={{ bounceDamping: 18 }}
        className={styles.slides}
      >
        {BENEFITS.map((benefit) => (
          <li key={benefit.id}>
            <div className={styles.slide}>
              <p className="p">{benefit.label}</p>

              <div className={styles.circleButtonContainer}>
                <div className={styles.circleButton}>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="54" height="54" rx="27" fill="black" />
                    <path
                      d="M16.9393 35.9393C16.3536 36.5251 16.3536 37.4749 16.9393 38.0607C17.5251 38.6464 18.4749 38.6464 19.0607 38.0607L16.9393 35.9393ZM38.5 18C38.5 17.1716 37.8284 16.5 37 16.5H23.5C22.6716 16.5 22 17.1716 22 18C22 18.8284 22.6716 19.5 23.5 19.5L35.5 19.5L35.5 31.5C35.5 32.3284 36.1716 33 37 33C37.8284 33 38.5 32.3284 38.5 31.5V18ZM19.0607 38.0607L38.0607 19.0607L35.9393 16.9393L16.9393 35.9393L19.0607 38.0607Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
