import {
  Benefits,
  CTA,
  Discover,
  FAQs,
  Footer,
  Hero,
  PageTransitionLayout,
} from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <PageTransitionLayout>
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <Discover />
        <FAQs />
        <CTA />
        <Footer />
      </main>
    </PageTransitionLayout>
  );
}
