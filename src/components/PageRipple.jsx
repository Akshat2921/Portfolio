import { useEffect, useRef, useState } from "react";

// Keep these in sync with the percentages in the `ripple-radiate`
// keyframes in index.css:
//   expand ends   -> EXPAND_MS / TOTAL_MS
//   hold ends     -> (EXPAND_MS + HOLD_MS) / TOTAL_MS
const EXPAND_MS = 700; // time to radiate out from the click point
const HOLD_MS = 400; // brief pause once it covers the screen (the "0.4s" delay)
const CONTRACT_MS = 500; // fade back out after the destination is revealed
const TOTAL_MS = EXPAND_MS + HOLD_MS + CONTRACT_MS;

/**
 * PageRipple - listens for clicks on any link across the site and, on
 * click, radiates a full-screen colorful ripple outward from the
 * exact point tapped (in every direction at once), holds briefly once
 * it covers the screen, reveals the destination (scroll / new tab /
 * navigation), then fades back out.
 *
 * Uses a real CSS @keyframes animation (rather than toggling classes)
 * so the growth is always smooth and frame-accurate, never an
 * instant "pop".
 */
export const PageRipple = () => {
  const [ripple, setRipple] = useState(null); // { id, x, y, radius }
  const actionRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const resolveAction = (anchor, href) => {
      if (href.startsWith("#") && href.length > 1) {
        return () => {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", href);
          }
        };
      }
      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        return () => {
          window.location.href = href;
        };
      }
      if (anchor.target === "_blank") {
        return () => window.open(href, "_blank", "noopener,noreferrer");
      }
      return () => {
        window.location.href = href;
      };
    };

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.startsWith("javascript:")) return;

      e.preventDefault();

      const rect = anchor.getBoundingClientRect();
      const x = e.clientX || rect.left + rect.width / 2;
      const y = e.clientY || rect.top + rect.height / 2;
      const radius =
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        ) + 60;

      clearTimers();
      actionRef.current = resolveAction(anchor, href);
      // A fresh element (new id/key) each click guarantees the CSS
      // animation always restarts cleanly from 0%.
      setRipple({ id: `${Date.now()}-${x}-${y}`, x, y, radius });

      const t1 = setTimeout(() => {
        actionRef.current?.();
      }, EXPAND_MS + HOLD_MS);

      const t2 = setTimeout(() => {
        setRipple(null);
      }, TOTAL_MS);

      timersRef.current.push(t1, t2);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clearTimers();
    };
  }, []);

  if (!ripple) return null;

  return (
    <div
      key={ripple.id}
      className="ripple-overlay"
      style={{
        left: ripple.x - ripple.radius,
        top: ripple.y - ripple.radius,
        width: ripple.radius * 2,
        height: ripple.radius * 2,
        animationDuration: `${TOTAL_MS}ms`,
      }}
      aria-hidden="true"
    />
  );
};
