import { useEffect, useRef } from "react";

/**
 * CursorTrail - a soft, glowing tail that follows the mouse around the
 * whole site. The visible dot lags slightly behind the real cursor
 * (damped follow) so the motion feels smooth and "animated" instead of
 * snapping instantly, then fades out over ~0.4s.
 *
 * It automatically pauses over any element marked with
 * `data-no-trail` (used for the Hero "AJ" card, which already has its
 * own dedicated mouse-tilt effect and shouldn't be doubled up).
 * It also disables itself on touch devices, where there's no cursor.
 */
export const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    // "trail" is a damped follower - it eases toward the real cursor
    // instead of matching it 1:1, which is what gives the tail its
    // soft, delayed, animated feel.
    const trail = { x: mouse.x, y: mouse.y };
    let paused = false;
    let particles = [];
    let rafId;
    let hasMoved = false;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      hasMoved = true;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      paused = !!(el && el.closest("[data-no-trail]"));
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onLeave = () => {
      hasMoved = false;
    };
    window.addEventListener("mouseleave", onLeave);

    const loop = () => {
      // Ease the visible trail toward the real cursor position.
      trail.x += (mouse.x - trail.x) * 0.14;
      trail.y += (mouse.y - trail.y) * 0.14;

      if (!paused && hasMoved) {
        particles.push({ x: trail.x, y: trail.y, life: 1 });
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        // ~0.4s fade lifespan at 60fps
        p.life -= 0.028;
      });
      particles = particles.filter((p) => p.life > 0);

      particles.forEach((p) => {
        const radius = 9 * p.life + 2;
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          radius
        );
        gradient.addColorStop(0, `rgba(32, 178, 166, ${0.5 * p.life})`);
        gradient.addColorStop(0.6, `rgba(32, 178, 166, ${0.18 * p.life})`);
        gradient.addColorStop(1, "rgba(32, 178, 166, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
};
