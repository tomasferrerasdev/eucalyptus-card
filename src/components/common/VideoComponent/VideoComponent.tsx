'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './VideoComponent.module.scss';

interface VideoComponent {
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  src: string;
  poster?: string;
  controls?: boolean;
}

export const VideoComponent = ({
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  src = '/video/hero_video.mp4',
  poster,
  controls = false,
}: VideoComponent) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(videoRef);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current && inView) {
          await videoRef.current.play();
        }

        if (videoRef?.current && videoRef.current.paused) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } catch (error) {}
    };

    playVideo();
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className={styles.video}
    >
      <video
        className={`${styles.video__item} ${className}`}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
        ref={videoRef}
        controls={controls}
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  );
};
