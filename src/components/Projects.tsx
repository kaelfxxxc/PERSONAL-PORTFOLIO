import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import Section from "./Section";
import imgDashboard from "../assets/healthbridge.png";
import imgEcommerce from "../assets/arentroom.jpg";
import imgDesignSystem from "../assets/03-design-system.jpg";
import imgFitness from "../assets/04-fitness-tracker.jpg";
import imgChat from "../assets/05-ai-chat.jpg";
import imgTasks from "../assets/06-task-manager.jpg";

const projectImages = [imgDashboard, imgEcommerce, imgDesignSystem, imgFitness, imgChat, imgTasks];

const sizeToGrid = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="projects" label="Featured Work" title="Selected Projects" description="A collection of recent projects showcasing expertise in modern web development" maxWidth="max-w-7xl">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all ${sizeToGrid[project.size as keyof typeof sizeToGrid]}`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={projectImages[i]}
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="mb-3">
                <h3 className="text-xl text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ProjectLink href={project.sourceUrl} icon={Github} label="View Source" />
                <ProjectLink href={project.sourceUrl} icon={ExternalLink} label="Live Demo" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ProjectLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ size?: number }>; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
      whileHover={{ x: 4 }}
    >
      <Icon size={16} />
      {label}
    </motion.a>
  );
}