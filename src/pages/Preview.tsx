import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState, useEffect } from 'react';
import FingerPrintBackground from '../layout/FingerPrintBackground';
import IntroContent from '../layout/IntroContent';
import WorksContent from '../layout/WorksContent';

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
  return basePages.map((page, i) => ({
    ...page,
    key: `${page.id}-${timestamp}-${cycle}-${i}`,
  }));
};

const getBackgroundComponent = (type: string) => {
  switch (type) {
    case "finger":
      return <FingerPrintBackground />;
    case "swirl":
      return <div className="swirl-background" />;
    case "waves":
      return <div className="waves-background" />;
    case "particles":
      return <div className="particles-background" />;
    case "zoom":
      return <div className="zoom-background" />;
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
      return <div className="p-8 text-white text-2xl">{type}</div>;
  }
};

const Preview = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(() => generatePages(0));
  const [cycle, setCycle] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(600); // SSR-safe fallback

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportHeight(window.innerHeight);
    }
  }, []);

  const virtualizer = useVirtualizer({
    count: pages.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => viewportHeight,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  // Infinite scroll trigger
  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1];
    if (!lastItem) return;

    const distanceFromBottom = virtualizer.getTotalSize() - (lastItem.start + lastItem.size);

    if (distanceFromBottom < viewportHeight * 2) {
      const newPages = generatePages(cycle);
      setPages((prev) => [...prev, ...newPages]);
      setCycle((prev) => prev + 1);
    }
  }, [virtualItems, cycle, viewportHeight, virtualizer]);

  return (
    <div
      ref={parentRef}
      className="h-screen overflow-y-auto w-full"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualRow) => {
          const page = pages[virtualRow.index];
          return (
            <div
              key={page.key}
              className={`absolute top-0 left-0 w-full ${page.color}`}
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                height: `${virtualRow.size}px`,
              }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none select-none">
                {getBackgroundComponent(page.background ?? '')}
              </div>

              {getContentComponent(page.content)}

              <div className="absolute z-10">{page.content}</div>

              {page.extra && (
                <div className="mt-4 text-xl text-white/80 relative z-10">
                  {page.extra}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
