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
    <section id={id} className="relative py-32 px-6">
      <div className={`${maxWidth} mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-wider text-violet-400 mb-4 block">{label}</span>
          <h2 className="text-4xl md:text-5xl text-white mb-4">{title}</h2>
          {description && <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}