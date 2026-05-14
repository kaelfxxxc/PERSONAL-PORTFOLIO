import { motion } from "motion/react";
import { User, Code, Lightbulb } from "lucide-react";
import { personalData } from "../data";
import Section from "./Section";

const highlights = [
  { icon: User, title: "Who I Am", description: "An aspiring software engineer passionate about creating impactful digital solutions." },
  { icon: Code, title: "What I Do", description: "Build modern web applications with React, Express.js, Node.js, and TypeScript and MERN stack." },
  { icon: Lightbulb, title: "My Approach", description: "Clean code, thoughtful design, and continuous learning drive everything I create." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <Section id="about" label="About Me" title="Building the Future, One Line at a Time" description={personalData.about.intro}>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Highlight Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="group relative p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 rounded-2xl transition-all duration-300" />
              <div className="relative flex flex-col items-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/10 transition-colors">
                  <h.icon size={18} className="text-violet-400" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">{h.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{h.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div variants={itemVariants} className="relative p-5 sm:p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="relative z-10 space-y-4 sm:space-y-6">
            {personalData.about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-violet-500/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-fuchsia-500/5 rounded-full blur-3xl -z-0" />
        </motion.div>
      </motion.div>
    </Section>
  );
}