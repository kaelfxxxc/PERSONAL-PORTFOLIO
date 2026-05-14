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
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 rounded-2xl transition-all duration-300" />
                <div className="relative flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    {Icon && <Icon size={20} className="text-violet-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium mb-1">{tech.name}</div>
                    <div className="text-xs text-zinc-500">{tech.category}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 flex items-center justify-center gap-8 text-zinc-600 text-sm"
      >
        {["TypeScript", "React", "Next.js", "Tailwind", "Node.js"].map((name, i) => (
          <span key={name}>
            {i > 0 && <span className="mr-8">•</span>}
            {name}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}