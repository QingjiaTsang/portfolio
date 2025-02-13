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

export function zoomIn(delay: number, duration: number) {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as TransitionType,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
}

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
