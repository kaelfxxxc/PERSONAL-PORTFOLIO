import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { incrementVisitorCount } from "../lib/visitor";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const c = incrementVisitorCount();
    setCount(c);
  }, []);

  if (count === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs sm:text-sm text-zinc-400"
      >
        <Eye size={12} className="text-violet-400 sm:size-[14px]" />
        <span>
          <span className="text-white font-medium">{count}</span> visitor{count !== 1 ? "s" : ""}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}