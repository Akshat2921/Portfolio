import { ArrowUpRight, Github, Wand2, Music2, ShoppingBag, ChefHat } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ProjectGraphic } from "@/components/ProjectGraphic";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "PixelCraft",
    subtitle: "Visual Web Design & Code Generation Tool",
    description:
      "A drag-and-drop visual page builder with undo/redo, 18+ customizable UI components, and a code generation engine that exports HTML, CSS, and React JSX. Integrates the Claude API for an AI-powered CSS generator with a live 3-viewport responsive preview.",
    tags: ["React", "Context API", "JavaScript", "Claude API"],
    link: "https://pixelcraft-z7uu-3s9045c7t-akshat2921-projects.vercel.app",
    github: "https://github.com/Akshat2921/pixelcraft",
    icon: Wand2,
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
  },
  {
    title: "Nightwave",
    subtitle: "Full-Featured Music Player",
    description:
      "A modular, event-driven music player built with vanilla JS OOP (7 classes), a real-time Web Audio API visualizer, IndexedDB + localStorage persistence, drag-and-drop queue reordering, and iTunes API–powered song search.",
    tags: ["JavaScript", "OOP", "Web Audio API", "IndexedDB"],
    link: "https://nightwave-music-player.vercel.app",
    github: "https://github.com/Akshat2921/nightwave-music-player",
    icon: Music2,
    gradient: "bg-gradient-to-br from-rose-600 to-orange-600",
  },
  {
    title: "ShopEase",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A React 19 e-commerce platform with Redux Toolkit state management, a 10-category product catalog, complete cart-to-checkout flow with order history, a persisted wishlist, and an admin dashboard with full CRUD and role-based routes.",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    link: "https://shopease-beige-pi.vercel.app",
    github: "https://github.com/Akshat2921/shopease",
    icon: ShoppingBag,
    gradient: "bg-gradient-to-br from-emerald-600 to-teal-700",
  },
  {
    title: "Tadka",
    subtitle: "Recipe Sharing Platform",
    description:
      "A full-featured recipe-sharing app built with React and the Context API — create, browse, and favourite recipes, with protected routes, form validation via React Hook Form, and toast-driven feedback across the app.",
    tags: ["React", "Context API", "React Router", "React Hook Form"],
    link: "#",
    github: "https://github.com/Akshat2921/Tadka-RecipeApp",
    icon: ChefHat,
    gradient: "bg-gradient-to-br from-amber-500 to-red-600",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make an impact.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground">
              A selection of my recent work, from AI-powered design tools to
              full-stack platforms that solve real-world problems.
            </p>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={(idx + 1) * 100} className="h-full">
              <div className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                {/* Graphic */}
                <div className="relative overflow-hidden aspect-video">
                  <ProjectGraphic icon={project.icon} gradient={project.gradient} />
                  {/* Overlay Links: always visible + tappable on touch devices, fades in on hover for desktop */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black/30 md:bg-black/20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo of ${project.title}`}
                      className="relative z-20 flex items-center justify-center w-14 h-14 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                    >
                      <ArrowUpRight className="w-6 h-6 pointer-events-none" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repo of ${project.title}`}
                      className="relative z-20 flex items-center justify-center w-14 h-14 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                    >
                      <Github className="w-6 h-6 pointer-events-none" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 shrink-0
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal delay={100} className="text-center mt-12">
          <a
            href="https://github.com/Akshat2921"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
