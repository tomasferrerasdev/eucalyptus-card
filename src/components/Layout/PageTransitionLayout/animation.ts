export const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const innerVariant = {
  initial: {
    y: '100svh',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      delay: 3.7,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
