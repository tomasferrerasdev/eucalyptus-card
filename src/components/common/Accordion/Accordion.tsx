'use client';
import { AnimatedText } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Accordion.module.scss';

interface ArrowSelectProps {
  className?: string;
}

const ArrowSelect = ({ className }: ArrowSelectProps) => {
  return (
    <svg
      className={`${styles.icon} ${className}`}
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.38458 1.32598C8.38453 0.808201 7.96474 0.388408 7.44696 0.388364C6.92918 0.388408 6.50939 0.808201 6.50934 1.32598L8.38458 1.32598ZM6.78399 18.7842C7.15013 19.1504 7.74379 19.1504 8.10993 18.7842L14.0767 12.8175C14.4428 12.4514 14.4428 11.8577 14.0767 11.4915C13.7105 11.1254 13.1169 11.1254 12.7507 11.4915L7.44696 16.7953L2.14319 11.4915C1.77705 11.1254 1.18338 11.1254 0.817245 11.4915C0.451108 11.8577 0.451108 12.4514 0.817245 12.8175L6.78399 18.7842ZM6.50934 1.32598L6.50934 18.1213L8.38458 18.1213L8.38458 1.32598L6.50934 1.32598Z"
        fill="black"
      />
    </svg>
  );
};

interface AccordionProps {
  i: number;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  description?: string;
  src: string;
  title?: string;
}

export const Accordion = ({
  i,
  expanded,
  setExpanded,
  src,
  title,
  description,
}: AccordionProps) => {
  const isOpen = i === expanded;
  return (
    <li className={styles.item}>
      <motion.h5
        initial={false}
        animate={{
          color: isOpen ? 'var(--accent)' : 'var(--black)',
        }}
        className={styles.item__title}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <AnimatedText
          className={styles.item__title__inner}
          title
        >{`${title}`}</AnimatedText>
        <ArrowSelect
          className={`${isOpen ? styles.active : ''} ${styles.item__title__arrow}`}
        />
      </motion.h5>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={i}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0, transition: { delay: 0.1 } },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={styles.item__dropdownMenu}
          >
            <motion.div
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
            >
              <div
                className={styles['item__dropdownMenu_description']}
                dangerouslySetInnerHTML={{ __html: description as string }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
