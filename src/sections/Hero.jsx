import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Code2,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useParallax, useTilt } from "@/hooks/useParallax";
import { SiLeetcode } from "react-icons/si";

const skills = [
  "React",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "Java",
  "C++",
  "HTML5",
  "CSS3",
  "DBMS",
  "Operating Systems",
  "Data Structures",
  "Git",
  "GitHub",
  "REST APIs",
  "Context API",
  "Responsive Design",
];

export const Hero = () => {
  const [bgRef, bgOffset] = useParallax(-0.08);
  const [dotsRef, dotsOffset] = useParallax(0.05);
  const tilt = useTilt(8);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40 scale-110"
          style={{ transform: `translateY(${bgOffset}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots - parallax layer */}
      <div
        ref={dotsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${dotsOffset}px)` }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Akshat Jain — a software engineer and B.Tech CSE
                (Data Science &amp; Analytics) student at IIIT Nagpur,
                specializing in React and modern JavaScript. I build
                scalable, animated web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Akshat_Jain_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  View / Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                {
                  icon: Github,
                  href: "https://github.com/Akshat2921",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/akshat-jain-23b7bb351/",
                  label: "LinkedIn",
                },
                {
                  icon: SiLeetcode,
                  href: "https://leetcode.com/u/Akshat_Jain_29/",
                  label: "LeetCode",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="
                    group
                    relative
                    p-2
                    rounded-full
                    glass
                    hover:bg-primary/10
                    hover:text-primary
                    transition-all
                    duration-300
                    hover:scale-125
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <social.icon
                    className="
                      w-5 h-5
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  />
                  <span
                    className="
                      pointer-events-none
                      absolute -top-9 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      rounded-md glass px-2 py-1
                      text-xs text-primary
                      opacity-0 translate-y-1
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Avatar Graphic (tilt/parallax) */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div
                ref={tilt.ref}
                onMouseMove={tilt.onMouseMove}
                onMouseLeave={tilt.onMouseLeave}
                data-no-trail
                style={{
                  ...tilt.style,
                  transition: "transform 0.2s ease-out",
                }}
                className="relative glass rounded-3xl p-2 glow-border"
              >
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary via-surface to-background flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(32,178,166,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(32,178,166,0.4) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center shadow-2xl shadow-primary/30">
                    <span className="text-6xl font-bold text-primary-foreground font-serif">
                      AJ
                    </span>
                  </div>
                  <div className="relative flex items-center gap-2 text-muted-foreground">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-sm tracking-wide">
                      B.Tech CSE • IIIT Nagpur
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to opportunities
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">576+</div>
                  <div className="text-xs text-muted-foreground">
                    LeetCode Solved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
