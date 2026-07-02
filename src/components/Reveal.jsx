import { useReveal } from "@/hooks/useReveal";

/**
 * Wraps children and fades/slides them in the first time they enter
 * the viewport. `delay` is in ms, `direction` controls the initial
 * translate offset.
 */
export const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
}) => {
  const [ref, isVisible] = useReveal();

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 blur-none"
          : `opacity-0 ${directions[direction]} blur-[6px]`
      } ${className}`}
      style={{
        transitionDuration: "800ms",
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
};
