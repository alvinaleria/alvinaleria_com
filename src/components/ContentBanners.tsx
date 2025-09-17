
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

type VideoThumbItem = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
};

type ThumbnailContentProps = {
  setSelectedVideo: (item: VideoThumbItem | null) => void;
};

const thumbnails = [
  {
    id: 1,
    title: "Interactive Landing Page",
    description: "A dynamic landing page with animations and scroll effects.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 3,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 4,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 5,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 6,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 7,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 8,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 9,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 10,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 11,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 12,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 13,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 14,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 15,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
];

// Utility to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ContentBanners: React.FC<ThumbnailContentProps> = ({ setSelectedVideo }) => {
  const limit = isMobile ? 8 : 15;
  const shuffledThumbnails = shuffleArray(thumbnails).slice(0, limit);
  
  return (
    <section className="px-4 py-4 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="font-arvo text-black text-3xl md:text-4xl font-bold mb-2">BANNER ADS</h1>
        <p className="font-roboto text-gray-800 text-lg">
          The goal is to always build something eye-catching that also drives results. These choice samples go the extra mile by trying to deliver the client's message through elegant animations but not overcomplicating the delivery.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shuffledThumbnails.map((thumb) => (
          <div
            key={thumb.id}
            className="w-[86%] mx-auto rounded shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedVideo(thumb)}
          >
            <img
              src={`/${thumb.thumbnail}`}
              alt={thumb.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentBanners;
export type { VideoThumbItem };

