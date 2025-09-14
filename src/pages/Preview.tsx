import { useRef, useLayoutEffect, useEffect, useState } from "react";
import FingerPrintBackground from "../layout/FingerPrintBackground";
import IntroContent from "../layout/IntroContent";
import WorksContent from "../layout/WorksContent";

const extraItems = [
  "Bonus Tip: Stay hydrated!",
  "Did you know? Cats sleep 70% of their lives.",
  "Quick Fact: The Eiffel Tower can grow in summer.",
  "Reminder: Take breaks while working.",
  "Fun Fact: Bananas are berries, but strawberries aren't.",
];

const rotateExtras = (cycle: number) => {
  const rotated = [...extraItems];
  for (let i = 0; i < cycle; i++) {
    const first = rotated.shift();
    if (first !== undefined) {
      rotated.push(first);
    }
  }
  return rotated;
};

const generatePages = (cycle: number) => {
  const rotatedExtras = rotateExtras(cycle);

  const basePages = [
    { id: 1, color: "bg-red-500", content: "intro", background: "finger" },
    { id: 2, color: "bg-black", content: "works" },
    { id: 3, color: "bg-green-500", content: "Page 3", extra: rotatedExtras[0], background: "swirl" },
    { id: 4, color: "bg-yellow-300", content: "Page 4", background: "waves" },
    { id: 5, color: "bg-purple-500", content: "Page 5", extra: rotatedExtras[1] },
    { id: 6, color: "bg-pink-500", content: "Page 6", background: "particles" },
    { id: 7, color: "bg-indigo-500", content: "Page 7", extra: rotatedExtras[2] },
    { id: 8, color: "bg-black", content: "Page 8", background: "zoom" },
  ];

  const timestamp = Date.now();
  return [...basePages, ...basePages, ...basePages].map((page, i) => ({
    ...page,
    key: `${page.id}-${timestamp}-${i}`,
  }));
};

const getBackgroundComponent = (type: string) => {
  switch (type) {
    case "finger":
      return <FingerPrintBackground />;
    default:
      return null;
  }
};

const getContentComponent = (type: string) => {
  switch (type) {
    case "intro":
      return <IntroContent />;
    case "works":
      return <WorksContent />;
    default:
      return null;
  }
};

type Page = {
  key: string;
  id: number;
  color: string;
  content: string;
  background?: string;
  extra?: string;
};

const Preview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const cycleCount = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const resetScroll = () => {
    if (containerRef.current) {
      const middleIndex = Math.floor(pages.length / 3);
      containerRef.current.scrollTop = window.innerHeight * middleIndex;
    }
  };

  const reshufflePages = (reset: boolean = true) => {
    setPages(generatePages(cycleCount.current));
    if (reset) {
      requestAnimationFrame(() => {
        requestAnimationFrame(resetScroll);
      });
    }
  };

  useLayoutEffect(() => {
    reshufflePages(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const pageHeight = window.innerHeight;
        const currentIndex = Math.round(scrollTop / pageHeight);

        const isNearTop = currentIndex <= 1;
        const isNearBottom = currentIndex >= pages.length - 2;

        if (isNearTop || isNearBottom) {
          container.scrollTop = isNearTop
            ? scrollTop + pageHeight * 8
            : scrollTop - pageHeight * 8;

          cycleCount.current += 1;
          reshufflePages(false);
        }

        scrollTimeout.current = null;
      }, 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [pages]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">
      {pages.map((page) => (
        <div
          key={page.key}
          className={`relative h-screen w-full flex flex-col items-center justify-center text-white text-4xl ${page.color}`}
        >
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            {getBackgroundComponent(page.background ?? "")}
          </div>

          {getContentComponent(page.content)}
          <div className="absolute z-10">{page.content}</div>
          {page.extra && (
            <div className="mt-4 text-xl text-white/80 relative z-10">
              {page.extra}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Preview;