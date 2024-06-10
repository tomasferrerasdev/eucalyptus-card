'use client';
import { useLoadingManager } from '@/store/useLoadingManager';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { innerVariant, variants } from './animation';

interface PageTransitionLayoutProps {
  children: ReactNode;
}

export const PageTransitionLayout = ({
  children,
}: PageTransitionLayoutProps) => {
  const { isFirstLoading, toggleFirstLoading } = useLoadingManager();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={isFirstLoading ? innerVariant : variants}
      onAnimationComplete={toggleFirstLoading}
    >
      {children}
    </motion.div>
  );
};
