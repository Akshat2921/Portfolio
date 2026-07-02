import { Trophy, Flame, Target, Code } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/useParallax";

const stats = [
  {
    icon: Code,
    value: "500+",
    label: "LeetCode Problems Solved",
    detail: "With a 300+ day solving streak",
  },
  {
    icon: Trophy,
    value: "1534",
    label: "CodeChef Rating",
    detail: "2-Star rated competitive programmer",
  },
  {
    icon: Target,
    value: "400+",
    label: "Striver's DSA Sheet",
    detail: "Problems completed across core DSA topics",
  },
  {
    icon: Flame,
    value: "4",
    label: "Shipped Projects",
    detail: "PixelCraft, Nightwave, ShopEase & Tadka",
  },
];

export const Achievements = () => {
  const [glowRef, glowOffset] = useParallax(-0.08);

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate(-50%, calc(-50% + ${glowOffset}px))` }}
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              By The Numbers
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Achievements that{" "}
              <span className="font-serif italic font-normal text-white">
                back it up.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground">
              Consistency in problem-solving, backed by shipped, working
              products.
            </p>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={(idx + 1) * 100} className="h-full">
              <div className="glass h-full p-8 rounded-3xl text-center glow-border hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <p className="text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
