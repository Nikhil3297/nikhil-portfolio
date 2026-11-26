export type FadeDirection = "up" | "down" | "left" | "right";

const OFFSET = 80;

export const fadeIn = (direction: FadeDirection, delay: number) => ({
  hidden: {
    x: direction === "left" ? OFFSET : direction === "right" ? -OFFSET : 0,
    y: direction === "up" ? OFFSET : direction === "down" ? -OFFSET : 0,
    opacity: 0,
    transition: {
      type: "tween" as const,
      duration: 1.5,
      delay,
      ease: [0.25, 0.6, 0.3, 0.8] as const,
    },
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween" as const,
      duration: 1.4,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75] as const,
    },
  },
});

// Spread onto a motion element (with fadeIn variants) to play the animation once, when it scrolls into view.
export const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;
