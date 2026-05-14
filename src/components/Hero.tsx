import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalData } from "../data";
import { scrollToSection } from "../lib/scroll";
import profileImg from "../assets/69232212f67b9ce05887613ea675774e0919747d.png";
import TypewriterText from "./TypewriterText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-zinc-950 to-fuchsia-600/10" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-20 sm:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
                <Sparkles size={14} className="text-violet-400 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">Available for freelance work</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-tight">
                <span className="block text-white">Building Digital</span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <TypewriterText />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-12 max-w-md mx-auto md:mx-0">
                {personalData.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="group px-5 sm:px-6 py-2.5 bg-white text-black rounded-lg font-medium inline-flex items-center gap-1.5 hover:bg-zinc-200 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="#projects"
                  className="px-5 sm:px-6 py-2.5 border border-white/10 text-white rounded-lg font-medium inline-flex items-center hover:bg-white/5 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View work
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-2xl sm:blur-3xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={profileImg}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent rounded-full" />
              </div>

              {/* Floating badge - hidden on small mobile, shown from sm upwards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 whitespace-nowrap">Available for work</p>
                    <p className="text-[10px] sm:text-xs text-zinc-600 hidden xs:block">Let's build something great</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - hidden on small mobile where space is tight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 sm:p-2"
          >
            <motion.div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}