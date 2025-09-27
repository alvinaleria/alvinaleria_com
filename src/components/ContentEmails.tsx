
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import ModalImage from './ModalImage';

type ImageThumbItem = {
  id: number;
  title: string;
  description: string;
  desktopImg: string;
  mobileImg: string;
  thumbnail: string;
};

type ThumbnailContentProps = {
  setSelectedImage: (item: ImageThumbItem | null) => void;
};

const thumbnails = [
  {
    id: 1,
    title: "Interactive Landing Page",
    description: "A dynamic landing page with animations and scroll effects.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 3,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 4,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 5,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 6,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 7,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 8,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 9,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 10,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 11,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 12,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 13,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
  },
  {
    id: 14,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image1.png",
  },
  {
    id: 15,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "image2.png",
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

const ContentEmails: React.FC<ThumbnailContentProps> = ({ setSelectedImage })  => {
  const limit = isMobile ? 2 : 5;
  const shuffledThumbnails = shuffleArray(thumbnails).slice(0, limit);

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="font-arvo text-black text-3xl md:text-4xl font-bold mb-2">Email Template</h1>
      </div>

      <div className="flex justify-center gap-4">
        {shuffledThumbnails.map((thumb) => (
          <div
            key={thumb.id}
            className="w-32 md:w-40 mx-auto rounded shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedImage(thumb)}
          >
            <img
              src={`/${thumb.thumbnail}`}
              alt={thumb.title}
              className="w-full max-h-150 object-cover object-top ounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentEmails;
export type { ImageThumbItem };
