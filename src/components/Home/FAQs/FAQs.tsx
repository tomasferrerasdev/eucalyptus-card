'use client';
import { Accordion, AnimatedText, ParallaxSection } from '@/components';
import { useState } from 'react';
import styles from './FAQs.module.scss';
import { DATA } from './data';

export const FAQs = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <ParallaxSection
        className={styles.faqsContainer}
        parallaxValues={[100, -100]}
      >
        <section className={`${styles.faqsContainer__wrapper} container`}>
          <div className={styles.title}>
            <h2 className="h2">
              <AnimatedText title>
                You have question we have answers.
              </AnimatedText>
            </h2>
            <p>
              <AnimatedText>
                Read what our satisfied customers have to say about their
                experiences shopping at Recozy.
              </AnimatedText>
            </p>
          </div>
          <div className={styles.faqs}>
            <ul>
              {DATA.map((item) => (
                <Accordion
                  i={item.id}
                  key={item.id}
                  src={item.src}
                  description={item.description}
                  title={item.title}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </ul>
          </div>
        </section>
      </ParallaxSection>
    </>
  );
};
