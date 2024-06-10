import { ParallaxSection } from '@/components/Layout';
import { Carousel } from '@/components/common/Carousel/Carousel';
import styles from './Benefits.module.scss';

export const Benefits = () => {
  return (
    <ParallaxSection parallaxValues={[10, 20]}>
      <section className={styles.benefitsWrapper}>
        <div className={`${styles.titleContainer} container`}>
          <h2 className="h2">With MINT, </h2>
          <h2 className="h2">it really adds up.</h2>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
      </section>
    </ParallaxSection>
  );
};
