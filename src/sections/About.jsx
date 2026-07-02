import { Code2, Database, GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, component-driven React code that's easy to extend.",
  },
  {
    icon: Sparkles,
    title: "Polished UI",
    description:
      "Sweating the small details — animation, spacing, and micro-interactions.",
  },
  {
    icon: Database,
    title: "Strong Fundamentals",
    description:
      "Grounded in DSA, OOP, DBMS and OS — 500+ problems solved on LeetCode.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description:
      "B.Tech CSE (Data Science & Analytics) at IIIT Nagpur, class of 2027.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <Reveal>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  one component at a time.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a software engineer and third-year B.Tech student in
                  Computer Science (Data Science &amp; Analytics) at the
                  Indian Institute of Information Technology, Nagpur. My
                  curiosity for how the web works has grown into a genuine
                  love for building interactive, well-crafted frontends.
                </p>
                <p>
                  I specialize in React, Redux, and Tailwind CSS, building
                  everything from AI-powered design tools to full-stack
                  e-commerce platforms. My approach combines solid CS
                  fundamentals — data structures, OOP, DBMS, and operating
                  systems — with a keen eye for design and user experience.
                </p>
                <p>
                  Outside of building products, you'll find me sharpening my
                  problem-solving on LeetCode and CodeChef, or exploring new
                  tools and APIs to bring into my next project.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="glass rounded-2xl p-6 glow-border">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not
                  just functional, but truly delightful — products that users
                  love to use and that I'm proud to have built."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <Reveal key={idx} delay={(idx + 1) * 100}>
                <div className="glass p-6 rounded-2xl h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
