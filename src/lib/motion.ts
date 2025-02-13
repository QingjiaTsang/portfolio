
type DirectionType = "left" | "right" | "up" | "down";
type TransitionType = "spring" | "tween" | "inertia";

export function textVariant(delay: number) {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as TransitionType,
        duration: 1.25,
        delay,
      },
    },
  };
}

export function fadeIn(direction: DirectionType, type: TransitionType, delay: number, duration: number) {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

export const zoomIn = {
  initial: {
    scale: 0,
  },
  start: (delay: number) => ({
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      delay,
    },
  }),
  exit: {
    scale: 0,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

export const increaseHeight = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  start: (delay: number) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 2,
      type: "spring",
      delay: delay || 0,
    },
  }),
  exit: (delay: number) => ({
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.75,
      type: "spring",
      delay: delay || 0.3,
    },
  }),
};

export function slideIn(direction: DirectionType, type: TransitionType, delay: number, duration: number) {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

export const rotateIn = {
  initial: {
    rotateX: -30,
    opacity: 0,
    y: 50,
  },
  enter: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    rotateX: -30,
    opacity: 0,
    y: 50,
  },
};

export function staggerContainer(staggerChildren?: number, delayChildren?: number) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
}
