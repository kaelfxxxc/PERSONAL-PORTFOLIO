import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={trailRef}
        className="hidden md:block fixed pointer-events-none z-[200] w-6 h-6 -ml-3 -mt-3 rounded-full bg-violet-400/10 blur-sm"
      />
      <motion.div
        ref={cursorRef}
        className="hidden md:block fixed pointer-events-none z-[201] w-2 h-2 -ml-1 -mt-1 rounded-full bg-violet-400/50"
      />
    </>
  );
}