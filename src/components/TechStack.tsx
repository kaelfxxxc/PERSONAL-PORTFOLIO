import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, FileCode, Zap, Palette, Sparkles, Server, Database, Package, Cloud, Network, TestTube, GitBranch } from "lucide-react";
import { techStack } from "../data";
import Section from "./Section";

const techIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  React: Code2, TypeScript: FileCode, "Next.js": Zap, "Tailwind CSS": Palette,
  Motion: Sparkles, "Node.js": Server, PostgreSQL: Database, Docker: Package,
  AWS: Cloud, GraphQL: Network, Jest: TestTube, Git: GitBranch,
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="stack" label="Tech Stack" title="Tools & Technologies" description="A curated selection of technologies I use to bring ideas to life" maxWidth="max-w-7xl">
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {techStack.map((tech, i) => {
          const Icon = techIcons[tech.name];
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <motion.div
                className="group relative p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 rounded-xl sm:rounded-2xl transition-all duration-300" />
                <div className="relative flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    {Icon && <Icon size={16} className="text-violet-400 sm:size-[18px]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">{tech.name}</div>
                    <div className="text-[10px] sm:text-xs text-zinc-500">{tech.category}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom marquee - hidden on tiny screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 text-zinc-600 text-xs sm:text-sm"
      >
        {["TypeScript", "React", "Next.js", "Tailwind", "Node.js"].map((name, i) => (
          <span key={name} className="flex items-center gap-x-4 sm:gap-x-8">
            {i > 0 && <span className="hidden xs:inline">•</span>}
            {name}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}