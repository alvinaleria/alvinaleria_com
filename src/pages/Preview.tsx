import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState, useEffect } from 'react';
import { easeOut, easeInOut, motion, AnimatePresence, Variants } from "framer-motion";

import FingerPrintBackground from '../layout/FingerPrintBackground';
import IntroContent from '../components/IntroContent';
import WorksContent from '../components/WorksContent';
import BannerContent from '../components/BannerContent';

import { ThumbnailItem } from "../components/BannerContent";

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
    { id: 2, color: "bg-black", content: "works"},
    { id: 3, color: "bg-green-500", content: "banner", extra: rotatedExtras[0], background: "swirl" },
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

const overlayColors = ["bg-blue-300", "bg-pink-300", "bg-black"];

const overlayVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: easeOut,
    },
  }),
  exit: (i: number) => ({
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      delay: (overlayColors.length - i - 1) * 0.2,
      duration: 1.2,
      ease: easeInOut,
    },
  }),
};

const modalVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: { delay: 1.8, duration: 0.5, ease: easeOut },
  },
  exit: {
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

type ModalProps = {
  item: ThumbnailItem | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, overlayColors.length * 300 + 500);
  };

  return (
    <AnimatePresence>
      {(item || isExiting) && (
        <>
          {overlayColors.map((color: string, i: number) => (
            <motion.div
              key={`overlay-${i}`}
              custom={i}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed ${color}`}
              style={{
                width: "500vmax",
                height: "500vmax",
                bottom: "0%",
                right: "0%",
                transform: "translate(-50%, -50%) rotate(-45deg)",
                transformOrigin: "center",
                zIndex: 40,
                pointerEvents: "none",
              }}
            />
          ))}

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative md:left-[250px] bg-white rounded-lg shadow-lg w-[63%] md:w-[525px] min-h-[300px] md:min-h-[500px] p-6 md:p-8 overflow-visible flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center mx-4 md:mx-0"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-600 z-60"
              >
                &times;
              </button>

              <div className="w-[130%] md:w-[240%] md:-ml-[120%] z-40 flex justify-center items-center md:relative absolute bottom-[-50%] left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0">
                <video
                  src={item?.videoUrl}
                  controls
                  className="w-full border-4 border-yellow-400 rounded-lg"
                />
              </div>

              <div className="w-full md:w-[60%] pl-0 md:pl-6 z-50 text-center md:text-left mt-6 md:mt-0">
                <h2 className="text-3xl text-gray-700 font-bold mb-4">{item?.title}</h2>
                <p className="text-lg text-gray-700">{item?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Preview = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(() => generatePages(0));
  const [cycle, setCycle] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(600); // SSR-safe fallback

  type ThumbnailItem = {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
  };

  const [selectedItem, setSelectedItem] = useState<ThumbnailItem | null>(null);

  const getContentComponent = (type: string) => {
    switch (type) {
      case "intro":
        return <IntroContent />;
      case "works":
        return <WorksContent />;
      case "banner":
        return <BannerContent setSelectedItem={setSelectedItem} />;
      default:
        return <div className="p-8 text-white text-2xl">{type}</div>;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportHeight(window.innerHeight);
    }
  }, []);

  const virtualizer = useVirtualizer({
    count: pages.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => {
      const page = pages[index];
      return page.id === 2 ? (viewportHeight / 3)*2 : viewportHeight;
    },
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
      className="h-screen overflow-y-auto overflow-hidden w-full"
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

              <div className="absolute z-10">{page.extra}</div>
              
              {page.extra && (
                <div className="relative z-10 w-full overflow-visible">
                  <div className="text-xl text-white/80 whitespace-nowrap w-[150vw] -ml-[25vw]">
                    {page.extra}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default Preview;
