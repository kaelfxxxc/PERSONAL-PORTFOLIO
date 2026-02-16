import { motion } from "motion/react";
import { personalData } from "../data";
import { User, Code, Lightbulb } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description: "A software engineer passionate about creating impactful digital solutions.",
    },
    {
      icon: Code,
      title: "What I Do",
      description: "Build modern web applications with React, TypeScript, and cutting-edge tools.",
    },
    {
      icon: Lightbulb,
      title: "My Approach",
      description: "Clean code, thoughtful design, and continuous learning drive everything I create.",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-sm uppercase tracking-wider text-violet-400 mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Building the Future, One Line at a Time
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              {personalData.about.intro}
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <highlight.icon size={20} className="text-violet-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5"
          >
            <div className="relative z-10 space-y-6">
              {personalData.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-zinc-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl -z-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
