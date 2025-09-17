
import React, { useState } from "react";

type ThumbnailItem = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
};

type ThumbnailContentProps = {
  setSelectedItem: (item: ThumbnailItem | null) => void;
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


const ContentVideos: React.FC<ThumbnailContentProps> = ({ setSelectedItem })  => {
  return (
    <section className="px-4 py-4 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="font-arvo text-black text-3xl md:text-4xl font-bold mb-2">MOTION GRAPHICS</h1>
        <p className="font-roboto text-gray-800 text-lg">
          Social media has been a big part of our lives for the past decade. These short motion graphics are designed to be eye-catching and deliver a message quickly. 
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {thumbnails.map((thumb) => (
          <div
              key={thumb.id}
              className="w-[97%] mx-auto rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedItem(thumb)}
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

export default ContentVideos;
export type { ThumbnailItem };
