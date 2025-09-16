
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
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
    id: 2,
    title: "Email Campaign",
    description: "Responsive email templates for a product launch.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
];

const ThumbnailGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-600 text-lg">
          These are some of the things I've worked on over the past few years.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {thumbnails.map((thumb) => (
          <div
            key={thumb.id}
            className="bg-white rounded shadow hover:shadow-lg transition cursor-pointer"
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

export default ThumbnailGrid;
