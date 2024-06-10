export const loaderVariant = {
  initial: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    scale: 0.8,
    zIndex: 0,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
