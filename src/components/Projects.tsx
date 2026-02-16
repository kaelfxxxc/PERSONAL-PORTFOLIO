import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

const projectImages = [
  "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwNDQ4NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA1MTIzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MDQ5ODM1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MDUxMzY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNTEzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGthbmJhbnxlbnwxfHx8fDE3NzA1MTM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getBentoGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-violet-400 mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A collection of recent projects showcasing expertise in modern web development
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all ${getBentoGridClass(
                project.size
              )}`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={projectImages[index]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="mb-3">
                  <h3 className="text-xl text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={16} />
                    View Source
                  </motion.a>
                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
