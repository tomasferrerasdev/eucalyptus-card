import {
  PageTransitionLayout,
  ParallaxSection,
  VideoComponent,
} from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <PageTransitionLayout>
      <main className={styles.main}>
        <ParallaxSection parallaxValues={[-400, 400]}>
          <section className={styles.intro}>
            <ParallaxSection
              parallaxValues={[-300, 300]}
              className={styles.intro__video}
            >
              <VideoComponent src="/video/hero_video.mp4" />
            </ParallaxSection>
          </section>
        </ParallaxSection>
      </main>
    </PageTransitionLayout>
  );
}
