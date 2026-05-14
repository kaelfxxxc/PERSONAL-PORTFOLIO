import { motion } from "motion/react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  maxWidth?: string;
  children: React.ReactNode;
};

export default function Section({ id, label, title, description, maxWidth = "max-w-6xl", children }: SectionProps) {
  return (
    <section id={id} className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className={`${maxWidth} mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <span className="text-xs sm:text-sm uppercase tracking-wider text-violet-400 mb-3 sm:mb-4 block">{label}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">{title}</h2>
          {description && <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto px-2">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}