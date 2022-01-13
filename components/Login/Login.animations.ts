export const container = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

export const section = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    delay: 3,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
}

export const paragraphs = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
