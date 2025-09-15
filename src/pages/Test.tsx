import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "BANNER ADS",
  "LANDING PAGES",
  "EMAIL TEMPLATES",
  "CUSTOM BUILT WEBSITES",
  "INTERACTIVE EXPERIENCES",
  "MOTION GRAPHICS",
  "GRAPHIC DESIGN"
];

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const WorksContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[][]>([]);

  useEffect(() => {
    const fillScreenWithLines = () => {
      const screenHeight = window.innerHeight;
      const lineHeight = 40;
      const linesNeeded = Math.ceil(screenHeight / lineHeight) * 2;
      const wordsPerLine = 12;

      const newLines: string[][] = [];
      for (let i = 0; i < linesNeeded; i++) {
        let lineWords: string[] = [];
        while (lineWords.length < wordsPerLine) {
          lineWords = [...lineWords, ...shuffleArray(words)];
        }
        newLines.push(lineWords.slice(0, wordsPerLine));
      }

      setLines(newLines);
    };

    fillScreenWithLines();
    window.addEventListener("resize", fillScreenWithLines);

    return () => {
      window.removeEventListener("resize", fillScreenWithLines);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".word",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out"
      }
    );
  }, [lines]);

  return (
    <section className="font-arvo text-white min-h-screen px-4 overflow-hidden flex flex-col justify-center items-start gap-4">
      <div ref={containerRef} className="flex flex-col gap-6 w-full">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="relative w-full overflow-visible"
          >
            <div
              className="whitespace-nowrap text-4xl font-semibold leading-relaxed absolute left-[-50vw]"
              style={{ minWidth: "200vw" }}
            >
              {line.map((word, wordIndex) => (
                <span
                  key={`${lineIndex}-${wordIndex}`}
                  className="word opacity-0 translate-y-10 transition-all duration-700 inline-block mr-6"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksContent;
