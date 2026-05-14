import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center hover:bg-violet-500/30 transition-colors"
        >
          <ArrowUp size={16} className="text-violet-400 sm:size-[18px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}