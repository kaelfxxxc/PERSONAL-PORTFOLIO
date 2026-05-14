import { useState, useEffect } from "react";

const words = ["Experiences", "Solutions", "Products", "Interfaces"];

export default function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < currentWord.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
      {words[wordIndex].slice(0, charIndex)}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}