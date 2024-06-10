import { ParallaxSection } from '@/components/Layout';
import {
  AnimatedElement,
  AnimatedText,
  Button,
  VideoComponent,
} from '@/components/common';
import Link from 'next/link';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <ParallaxSection parallaxValues={[-400, 400]}>
      <section className={styles.intro}>
        <ParallaxSection
          parallaxValues={[-300, 300]}
          className={styles.intro__video}
        >
          <VideoComponent src="/video/hero_video.mp4" />
        </ParallaxSection>
        <div className="container">
          <ParallaxSection
            className={styles.intro__content}
            parallaxValues={[200, -250]}
          >
            <h1 className={`h1 ${styles.intro__content__title}`}>
              <AnimatedText title withBlueDot>
                Excellence in minting
              </AnimatedText>
            </h1>
            <AnimatedElement delay={0.2}>
              <div className={styles.intro__content__bottom}>
                <Link scroll={false} href={`/`}>
                  <Button variant="white">Learn more</Button>
                </Link>
                <div className={styles.subtitle}>
                  <AnimatedElement delay={0.2}>
                    Eucalyptus Card is proud to present our fresh design take on
                    the iconic Silver Buffalo Round
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          </ParallaxSection>
        </div>
      </section>
    </ParallaxSection>
  );
};
