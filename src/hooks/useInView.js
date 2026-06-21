import { useEffect, useRef, useState } from "react";

// Adds a one-shot "in view" flag for scroll-reveal animations.
// Respects prefers-reduced-motion by reporting visible immediately.
export function useInView(options = { threshold: 0.16 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          io.unobserve(e.target);
        }
      });
    }, options);

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}
