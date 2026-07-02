import { useEffect, useRef, useState } from "react";

/**
 * useParallax - returns a vertical offset proportional to how far the
 * referenced element is from the center of the viewport, scaled by
 * `speed`. Positive speed drifts down as you scroll, negative drifts up.
 * Uses rAF-throttled scroll listener for smooth 60fps updates.
 */
export const useParallax = (speed = 0.15) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let ticking = false;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      setOffset(distanceFromCenter * speed);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return [ref, offset];
};

/**
 * useTilt - mouse-follow 3D tilt effect for cards/images. Returns a
 * ref to attach and a style object with the current transform.
 */
export const useTilt = (max = 10) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateY(${x * max}deg) rotateX(${
        -y * max
      }deg) scale3d(1.02,1.02,1.02)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)",
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
};
