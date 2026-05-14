import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import Section from "./Section";
import imgHealthbridge from "../assets/healthbridge.png";
import imgArentroom from "../assets/arentroom.jpg";
import imgDesignSystem from "../assets/03-design-system.jpg";
import imgFitness from "../assets/04-fitness-tracker.jpg";
import imgChat from "../assets/05-ai-chat.jpg";
import imgTasks from "../assets/06-task-manager.jpg";

const projectImages = [imgHealthbridge, imgArentroom, imgDesignSystem, imgFitness, imgChat, imgTasks];

const sizeToGrid = {
  large: "sm:col-span-2 sm:row-span-2",
  medium: "sm:col-span-1 sm:row-span-2",
  small: "sm:col-span-1 sm:row-span-1",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="projects" label="Featured Work" title="Selected Projects" description="A collection of recent projects showcasing expertise in modern web development" maxWidth="max-w-7xl">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[260px] xs:auto-rows-[280px] gap-3 sm:gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all min-h-[260px] ${sizeToGrid[project.size as keyof typeof sizeToGrid] || ""}`}
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

            {/* Links - always visible on mobile/touch, shown on hover for desktop */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-10">
              <motion.a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900/80 border border-white/20 flex items-center justify-center text-white hover:text-violet-400 hover:border-violet-400/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={14} />
              </motion.a>
              <motion.a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900/80 border border-white/20 flex items-center justify-center text-white hover:text-violet-400 hover:border-violet-400/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            </div>

            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6">
              <div className="mb-2 sm:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl text-white mb-1 sm:mb-2 group-hover:text-violet-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-white/5 border border-white/10 rounded-full text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}