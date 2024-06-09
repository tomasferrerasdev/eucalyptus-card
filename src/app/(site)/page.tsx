import { Benefits, Discover, Hero, PageTransitionLayout } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <PageTransitionLayout>
      <main className={styles.main}>
        <Hero />
        <Benefits benefits={[]} />
        <Discover />
      </main>
    </PageTransitionLayout>
  );
}
