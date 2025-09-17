
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
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 3,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
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
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 6,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 7,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 8,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 9,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 10,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 11,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 12,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 13,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 14,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
    thumbnail: "apple_news1_starbucks.jpg",
  },
  {
    id: 15,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    desktopImg: "image1.png",
    mobileImg: "image2.png",
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

const ContentEmails: React.FC<ThumbnailContentProps> = ({ setSelectedImage })  => {
  const limit = isMobile ? 8 : 15;
  const shuffledThumbnails = shuffleArray(thumbnails).slice(0, limit);

  return (
    <section className="px-4 py-4 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="font-arvo text-black text-3xl md:text-4xl font-bold mb-2">Email Template</h1>
        <p className="font-roboto text-gray-800 text-lg">
          Email coding is a lost art that requires a delicate balance between the knowledge of legacy browser and devices and modern innovation. Here are a few I have coded for various all-in-one marketing platforms out in the market now.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shuffledThumbnails.map((thumb) => (
          <div
              key={thumb.id}
              className="w-[86%] mx-auto rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedImage(thumb)}
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

export default ContentEmails;
export type { ImageThumbItem };
