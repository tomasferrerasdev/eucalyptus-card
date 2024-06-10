'use client';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';
import { Loader } from '../Loader/Loader';

const options = {
  duration: 1.5,
  smoothWheel: true,
};

type SmoothScrollProps = {
  children: ReactNode;
};

export const SmoothLayout = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis root options={{ ...options }}>
      <Loader />
      {children}
    </ReactLenis>
  );
};
