import { ParallaxSection } from '@/components/Layout';
import styles from './Benefits.module.scss';

type Benefit = {
  title: string;
  href: string;
};

interface BenefitsProps {
  benefits: Benefit[];
}

export const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <ParallaxSection parallaxValues={[10, 20]}>
      <section className={styles.benefitsWrapper}>
        <div className={`${styles.titleContainer} container`}>
          <h2 className="h2">With MINT, </h2>
          <h2 className="h2">it really adds up.</h2>
        </div>
      </section>
    </ParallaxSection>
  );
};
