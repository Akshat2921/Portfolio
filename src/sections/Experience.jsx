import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/useParallax";

const milestones = [
  {
    period: "2023 — 2027",
    role: "B.Tech in Computer Science",
    company: "IIIT Nagpur — Data Science & Analytics",
    description:
      "Building a strong foundation in Data Structures & Algorithms, OOP, DBMS, and Operating Systems, while applying that theory to real, shipped frontend projects.",
    technologies: ["DSA", "OOP", "DBMS", "Operating Systems"],
    current: true,
  },
  {
    period: "2024 — Present",
    role: "Full-Stack Project Builder",
    company: "Personal Projects",
    description:
      "Designed and shipped four production-style apps — PixelCraft, Nightwave, ShopEase, and Tadka — spanning AI-assisted tooling, real-time audio, and full e-commerce flows.",
    technologies: ["React", "Redux Toolkit", "Context API", "REST APIs"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "Competitive Programmer",
    company: "LeetCode & CodeChef",
    description:
      "Solved 576+ problems on LeetCode (182 Easy, 311 Medium, 83 Hard) with a 300+ day streak and 19 badges earned, and hold a 2-star rating (1534) on CodeChef — sharpening algorithmic thinking under time pressure.",
    technologies: ["Algorithms", "Problem Solving", "C++"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "DSA Practitioner",
    company: "Striver's DSA Sheet",
    description:
      "Completed 400+ problems from Striver's DSA Sheet, reinforcing core data structure and algorithm concepts used daily while building performant applications.",
    technologies: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
    current: false,
  },
];

export const Experience = () => {
  const [glowRef, glowOffset] = useParallax(0.1);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        style={{ transform: `translateY(calc(-50% + ${glowOffset}px))` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span
              className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase"
            >
              My Journey
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 text-secondary-foreground"
            >
              Milestones that{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                speak volumes.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground">
              A timeline of my growth as an engineer — from classroom
              fundamentals to competitive programming and shipped products.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Milestone Items */}
          <div className="space-y-12">
            {milestones.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <Reveal
                  delay={(idx + 1) * 100}
                  direction={idx % 2 === 0 ? "right" : "left"}
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
