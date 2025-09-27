import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState, useEffect } from 'react';

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

import Modal from '../components/Modal';

import { ThumbItem } from "../components/ContentBanners";


const extraItems = (
  setSelected: React.Dispatch<React.SetStateAction<ThumbItem | null>>
) => [
  <ContentBanners setSelected={setSelected} />,
  <ContentVideos setSelected={setSelected} />,
  <ContentEmails setSelected={setSelected} />,
  <ContentMaestro setSelected={setSelected} />,
  <ContentGame1 setSelected={setSelected} />,
  <ContentGame2 setSelected={setSelected} />,
  <ContentLego setSelected={setSelected} />,
];


const rotateExtras = (
  cycle: number,
  setSelected: React.Dispatch<React.SetStateAction<ThumbItem | null>>
) => {
  const rotated = [...extraItems(setSelected)];
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
  setSelected: React.Dispatch<React.SetStateAction<ThumbItem | null>>
) => {
  const rotatedExtras = rotateExtras(cycle, setSelected);

  const basePages = [
    { id: 1, color: "bg-[#b93c31]", content: "intro", background: "finger" },
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

  const [selectedVideo, setSelected] = useState<ThumbItem | null>(null);

  const [pages, setPages] = useState<any[]>([]); // Use correct type if you have one
  const [cycle, setCycle] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(600); // SSR-safe fallback

  useEffect(() => {
    setPages(generatePages(0, setSelected));
  }, [setSelected]);

  type ThumbnailItem = {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
  };

  const getContentComponent = (type: string) => {
    switch (type) {
      case "intro":
        return <ContentIntro />;
      case "works":
        return <ContentWorks />;
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
      const newPages = generatePages(cycle, setSelected);
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

      <Modal item={selectedVideo} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Landing;
