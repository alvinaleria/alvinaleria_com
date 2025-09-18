import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState, useEffect } from 'react';
import { easeOut, easeInOut, motion, AnimatePresence, Variants } from "framer-motion";

import FingerPrintBackground from '../layout/FingerPrintBackground';
import ContentIntro from '../components/ContentIntro';
import ContentWorks from '../components/ContentWorks';
import ContentBanners from '../components/ContentBanners';
import ContentVideos from '../components/ContentVideos';
import ContentEmails from '../components/ContentEmails';
import ContentMaestro from '../components/ContentMaestro';
import ContentGame1 from '../components/ContentGame1';
import ContentGame2 from '../components/ContentGame2';
import ContentLego from '../components/ContentLego';

import ModalVideo from '../components/ModalVideo';
import ModalImage from '../components/ModalImage';

import { VideoThumbItem } from "../components/ContentBanners";
import { ImageThumbItem } from "../components/ContentEmails";


const extraItems = (
  setSelectedVideo: React.Dispatch<React.SetStateAction<VideoThumbItem | null>>,
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageThumbItem | null>>
) => [
  <ContentBanners setSelectedVideo={setSelectedVideo} />,
  <ContentVideos setSelectedVideo={setSelectedVideo} />,
  <ContentEmails setSelectedImage={setSelectedImage} />,
  <ContentMaestro />,
  <ContentGame1 />,
  <ContentGame2 />,
  <ContentLego />,
];


const rotateExtras = (
  cycle: number,
  setSelectedVideo: React.Dispatch<React.SetStateAction<VideoThumbItem | null>>,
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageThumbItem | null>>
) => {
  const rotated = [...extraItems(setSelectedVideo, setSelectedImage)];
  for (let i = 0; i < cycle; i++) {
    const first = rotated.shift();
    if (first !== undefined) {
      rotated.push(first);
    }
  }

  for (let i = rotated.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rotated[i], rotated[j]] = [rotated[j], rotated[i]];
  }

  return rotated;
};

const generatePages = (
  cycle: number,
  setSelectedVideo: React.Dispatch<React.SetStateAction<VideoThumbItem | null>>,
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageThumbItem | null>>
) => {
  const rotatedExtras = rotateExtras(cycle, setSelectedVideo, setSelectedImage);

  const basePages = [
    { id: 1, color: "bg-red-500", content: "intro", background: "finger" },
    { id: 2, color: "bg-black", content: "works"},
    { id: 3, color: "bg-blue-500", content: "banner", extra: rotatedExtras[0] },
    { id: 4, color: "bg-yellow-500", content: "videos", extra: rotatedExtras[1] },
    { id: 5, color: "bg-purple-500", content: "Middle Graphics" },
    { id: 6, color: "bg-pink-500", content: "emails", extra: rotatedExtras[2] },
    { id: 7, color: "bg-indigo-500", content: "Page 7", extra: rotatedExtras[3] },
    { id: 8, color: "bg-black", content: "End Grpahics", background: "waves" },
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

const Landing = () => {
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

  const [selectedVideo, setSelectedVideo] = useState<VideoThumbItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageThumbItem | null>(null);

  const getContentComponent = (type: string) => {
    switch (type) {
      case "intro":
        return <ContentIntro />;
      case "works":
        return <ContentWorks />;
      case "banner":
        return <ContentBanners setSelectedVideo={setSelectedVideo} />;
      case "videos":
        return <ContentVideos setSelectedVideo={setSelectedVideo} />;
      case "emails":
        return <ContentEmails setSelectedImage={setSelectedImage} />;
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

              {page.extra ?? getContentComponent(page.content)}
            </div>
          );
        })}
      </div>

      <ModalVideo item={selectedVideo} onClose={() => setSelectedVideo(null)} />
      <ModalImage item={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default Landing;
