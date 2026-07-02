/**
 * A generated, code-themed visual used in place of project screenshots.
 * Renders a gradient background with a large icon and decorative grid —
 * keeps the cards visually rich without relying on external images.
 */
export const ProjectGraphic = ({ icon: Icon, gradient, pattern }) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${gradient}`}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-black/20 blur-2xl" />

      {pattern}

      <Icon
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 text-white/90 drop-shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
        strokeWidth={1.5}
      />
    </div>
  );
};
