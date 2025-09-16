
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

const overlayColors = ["bg-blue-300", "bg-pink-300", "bg-black"];

const overlayVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
  exit: (i) => ({
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      delay: (overlayColors.length - i - 1) * 0.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  }),
};

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: { delay: 1.8, duration: 0.5, ease: "easeOut" },
  },
  exit: {
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Modal = ({ item, onClose }) => {
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
          {overlayColors.map((color, i) => (
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
                  src={item.videoUrl}
                  controls
                  className="w-full border-4 border-yellow-400 rounded-lg"
                />
              </div>

              <div className="w-full md:w-[60%] pl-0 md:pl-6 z-50 text-center md:text-left mt-6 md:mt-0">
                <h2 className="text-3xl text-gray-700 font-bold mb-4">{item.title}</h2>
                <p className="text-lg text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

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

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default ThumbnailGrid;
