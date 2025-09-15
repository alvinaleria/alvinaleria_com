import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "BANNER ADS",
  "LANDING PAGES",
  "EMAIL TEMPLATES",
  "CUSTOM WEBSITES",
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
      const linesNeeded = Math.ceil(screenHeight / lineHeight);
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
      { y: 20 },
      {
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out"
      }
    );
  }, [lines]);

  return (
    <section className="font-arvo text-white min-h-screen px-0 overflow-hidden flex flex-col ml-[-100px] justify-center items-start gap-4 relative">
      <div ref={containerRef} className="flex flex-col gap-6 w-full relative">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="w-full whitespace-nowrap font-semibold text-6xl leading-[1em]"
          >
            {line.map((word, wordIndex) => {
              if (lineIndex === 2 && wordIndex === 1) {
                return (
                  <span
                    key={`special-${lineIndex}-${wordIndex}`}
                    className="text-yellow-400 opacity-100 font-bold inline-block mr-6"
                  >
                    THESE ARE A FEW PROJECTS I
                  </span>
                );
              }

              if (lineIndex === 3 && wordIndex === 1) {
                return (
                  <span
                    key={`special-${lineIndex}-${wordIndex}`}
                    className="text-yellow-400 opacity-100 font-bold inline-block mr-6"
                  >
                     WORKED IN THE PAST FEW YEARS.
                  </span>
                );
              }

               if (lineIndex === 4 && wordIndex === 1) {
                return (
                  <span
                    key={`special-${lineIndex}-${wordIndex}`}
                    className="text-yellow-400 opacity-100 font-bold inline-block mr-6"
                  >
                     PLEASE ENJOY!
                  </span>
                );
              }

              return (
                <span
                  key={`${lineIndex}-${wordIndex}`}
                  className="word opacity-20 hover:opacity-80 transition-opacity duration-300 inline-block mr-6"
                >
                  {word}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksContent;
