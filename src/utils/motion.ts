export const useMotionBinds = () => ({
  fadeInScale: {
    initial: { scale: .95, opacity: 0 },
    enter: { scale: 1, opacity: 1 }
  },
  fadeInScaleDim: {
    initial: { scale: .9, opacity: 0 },
    enter: { scale: 1, opacity: .5 }
  },
  fadeInSlideUp: {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 }
  },
  fadeInSlideUpDim: {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 }
  },
  fadeInSlideRight: {
    initial: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 }
  }
});
