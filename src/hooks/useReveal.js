import { useEffect, useRef, useState } from "react";

/**
 * useReveal - triggers a boolean flag to true the first time the
 * referenced element scrolls into the viewport. Used to drive
 * scroll-triggered fade/slide-in animations across the site.
 */
export const useReveal = (options = {}) => {
  const { threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};
