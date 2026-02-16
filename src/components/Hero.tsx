import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalData } from "../data";
import profileImage from "figma:asset/69232212f67b9ce05887613ea675774e0919747d.png";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-zinc-950 to-fuchsia-600/10" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles size={16} className="text-violet-400" />
              <span className="text-sm text-zinc-300">Available for freelance work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            >
              <span className="block text-white">Building Digital</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-12"
            >
              {personalData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            >
              <motion.button
                onClick={handleContactClick}
                className="group px-8 py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.a
                href="#projects"
                className="px-8 py-3 border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View work
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent rounded-full" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Available for work</p>
                    <p className="text-xs text-zinc-600">Let's build something great</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
