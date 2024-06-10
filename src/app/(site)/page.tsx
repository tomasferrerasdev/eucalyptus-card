import { Benefits, Discover, FAQs, Hero } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    //<PageTransitionLayout>
    <main className={styles.main}>
      <Hero />
      <Benefits />
      <Discover />
      <FAQs />
    </main>
    //</PageTransitionLayout>
  );
}
